import Button from "@components/ui/button";
import FormattedInput from "@components/ui/formatted-input";
import Input from "@components/ui/input";
import Label from "@components/ui/label";
import Radio from "@components/ui/radio/radio";
import { useCheckout } from "@contexts/checkout.context";
import {
  useOrderStatusesQuery,
  OrderStatusesOrderByColumn,
  SortOrder,
} from "@graphql/order_status.graphql";
import { useCreateOrderMutation } from "@graphql/orders.graphql";
import { formatOrderedProduct } from "@utils/format-ordered-product";
import { maskPhoneNumber } from "@utils/mask-phone-number";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import ValidationError from "@components/ui/validation-error";
import { ROUTES } from "@utils/routes";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useCart } from "@contexts/quick-cart/cart.context";
import {
  calculatePaidTotal,
  calculateTotal,
} from "@contexts/quick-cart/cart.utils";

interface FormValues {
  payment_gateway: "CASH_ON_DELIVERY" | "STRIPE";
  contact: string;
  card: {
    number: string;
    expiry: string;
    cvc: string;
    email: string;
  };
}

const paymentSchema = Yup.object().shape({
  contact: Yup.string().min(8).required(),
  payment_gateway: Yup.string()
    .default("STRIPE")
    .oneOf(["CASH_ON_DELIVERY", "STRIPE"]),
  card: Yup.mixed().when("payment_gateway", {
    is: (value: string) => value === "STRIPE",
    then: Yup.object().shape({
      number: Yup.string().required(),
      expiry: Yup.string().required(),
      cvc: Yup.string().required(),
      email: Yup.string().email().required(),
    }),
  }),
});

const PaymentForm = () => {
  const router = useRouter();
  const [createOrder, { loading }] = useCreateOrderMutation();
  const { data: orderStatusData } = useOrderStatusesQuery({
    variables: {
      first: 100,
      page: 1,
      orderBy: [
        {
          field: OrderStatusesOrderByColumn.Serial,
          order: SortOrder.Asc,
        },
      ],
    },
  });
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(paymentSchema),
    defaultValues: {
      payment_gateway: "STRIPE",
    },
  });

  const { items } = useCart();
  const {
    billing_address,
    shipping_address,
    delivery_time,
    checkoutData,
    coupon,
    discount,
  } = useCheckout();

  const available_items = items?.filter(
    (item) => !checkoutData?.unavailable_products?.includes(item.id)
  );

  const subtotal = calculateTotal(available_items);
  const total = calculatePaidTotal(
    {
      totalAmount: subtotal,
      tax: checkoutData?.total_tax!,
      shipping_charge: checkoutData?.shipping_charge!,
    },
    discount
  );
  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    let input = {
      //@ts-ignore
      products: available_items?.map((item) => formatOrderedProduct(item)),
      customer_contact: values.contact,
      status: orderStatusData?.order_statuses?.data[0]?.id ?? 1,
      amount: subtotal,
      coupon_id: coupon?.id,
      discount: discount ?? 0,
      paid_total: total,
      total,
      sales_tax: checkoutData?.total_tax,
      delivery_fee: checkoutData?.shipping_charge,
      delivery_time: delivery_time?.description,
      payment_gateway: values.payment_gateway,
      billing_address: {
        ...(billing_address?.address && billing_address.address),
      },
      shipping_address: {
        ...(shipping_address?.address && shipping_address.address),
      },
    };
    if (values.payment_gateway !== "CASH_ON_DELIVERY") {
      // @ts-ignore
      input.card = {
        number: values.card.number,
        expiryMonth: values.card.expiry?.split("/")[0],
        expiryYear: values.card.expiry?.split("/")[1],
        cvv: values.card.cvc,
        email: values.card.email,
      };
    }
    delete input.billing_address.__typename;
    delete input.shipping_address.__typename;
    const order = await createOrder({
      variables: {
        // @ts-ignore
        input,
      },
    });
    if (order?.data?.createOrder?.tracking_number) {
      router.push(
        `${ROUTES.ORDER_RECEIVED}/${order?.data?.createOrder?.tracking_number}`
      );
    }
  };
  const isCashOnDelivery = watch("payment_gateway");
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col"
    >
      <Input
        {...register("contact")}
        label="Enter Your Contact Number"
        variant="outline"
        className="flex-1"
        onChange={(e) => setValue("contact", maskPhoneNumber(e.target.value))}
        error={errors?.contact?.message}
      />

      <div className="my-6">
        <Label>Payment Gateway</Label>
        <div className="space-x-4 flex items-center">
          <Radio
            id="stripe"
            type="radio"
            {...register("payment_gateway")}
            value="STRIPE"
            label="Stripe"
          />

          <Radio
            id="cod"
            type="radio"
            {...register("payment_gateway")}
            value="CASH_ON_DELIVERY"
            label="Cash On Delivery"
          />
        </div>
      </div>

      {isCashOnDelivery === "STRIPE" && (
        <div>
          <Label>Card Information</Label>
          <Input
            {...register("card.email")}
            variant="outline"
            placeholder="Email"
            error={errors.card?.email?.message}
          />

          <FormattedInput
            variant="outline"
            placeholder="Card Number(ex: 4242424242424242)"
            {...register("card.number")}
            options={{
              creditCard: true,
            }}
            error={errors.card?.number?.message}
          />

          <div className="flex space-x-4 w-full">
            <FormattedInput
              variant="outline"
              className="w-1/2"
              placeholder="M/Y"
              options={{ date: true, datePattern: ["m", "y"] }}
              {...register("card.expiry")}
              error={errors.card?.expiry?.message}
            />
            <FormattedInput
              variant="outline"
              className="w-1/2"
              placeholder="CVC"
              options={{ blocks: [4] }}
              {...register("card.cvc")}
              error={errors.card?.cvc?.message}
            />
          </div>
        </div>
      )}
      {!subtotal && (
        <ValidationError message="Your ordered items are unavailable" />
      )}
      {total < 0 && (
        <div className="mt-3">
          <ValidationError message="Sorry, we can't process your order :(" />
        </div>
      )}
      <Button
        loading={loading}
        disabled={!subtotal || total < 0}
        className="w-full lg:w-auto lg:ml-auto mt-5"
      >
        Place Order
      </Button>
    </form>
  );
};

export default PaymentForm;
