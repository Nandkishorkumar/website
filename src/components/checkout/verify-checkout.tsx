import Button from "@components/ui/button";
import { useVerifyCheckoutMutation } from "@graphql/checkout.graphql";
import { useCheckout } from "@contexts/checkout.context";
import usePrice from "@utils/use-price";
import CheckoutCartItem from "@components/checkout/checkout-cart-item";
import { useRouter } from "next/router";
import { formatOrderedProduct } from "@utils/format-ordered-product";
import EmptyCartIcon from "@components/icons/empty-cart";
import { loggedIn } from "@utils/is-loggedin";
import { useUI } from "@contexts/ui.context";
import { useState } from "react";
import ValidationError from "@components/ui/validation-error";
import { useCart } from "@contexts/quick-cart/cart.context";
import omit from "lodash/omit";

const VerifyCheckout = () => {
  const router = useRouter();
  const [errorMessage, setError] = useState("");
  const { billing_address, shipping_address, setCheckoutData } = useCheckout();
  const { items, total, isEmpty } = useCart();
  const { openModal, setModalView } = useUI();
  const { price: subtotal } = usePrice(
    items && {
      amount: total,
    }
  );
  const [verifyCheckout, { loading }] = useVerifyCheckoutMutation();

  async function handleVerifyCheckout() {
    if (loggedIn()) {
      if (billing_address && shipping_address) {
        const { data } = await verifyCheckout({
          variables: {
            amount: total,
            products: items?.map((item) => formatOrderedProduct(item)),
            billing_address: {
              ...(billing_address?.address &&
                omit(billing_address.address, ["__typename"])),
            },
            shipping_address: {
              ...(shipping_address?.address &&
                omit(shipping_address.address, ["__typename"])),
            },
          },
        });
        if (data) {
          setCheckoutData(data.verifyCheckout);
        }
        router.push("/order");
      } else {
        setError("Please add both shipping and billing address");
      }
    } else {
      setModalView("LOGIN_VIEW");
      openModal();
    }
  }

  return (
    <div className="w-full">
      <div className="flex flex-col items-center space-x-4 mb-4">
        <span className="text-base font-bold text-heading">Your Order</span>
      </div>
      <div className="flex flex-col py-3 border-b border-gray-200">
        {isEmpty ? (
          <div className="h-full flex flex-col items-center justify-center mb-4">
            <EmptyCartIcon width={140} height={176} />
            <h4 className="mt-6 text-gray-500 font-semibold">
              No products found
            </h4>
          </div>
        ) : (
          items?.map((item) => <CheckoutCartItem item={item} key={item.id} />)
        )}
      </div>
      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <p className="text-sm text-body">Sub Total</p>
          <span className="text-sm text-body">{subtotal}</span>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-body">Taxes</p>
          <span className="text-sm text-body">Calculated at checkout</span>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-body">Estimated Shipping</p>
          <span className="text-sm text-body">Calculated at checkout</span>
        </div>
      </div>
      <Button
        loading={loading}
        className="w-full mt-5"
        onClick={handleVerifyCheckout}
        disabled={isEmpty}
      >
        Proceed to checkout
      </Button>

      {errorMessage && (
        <div className="mt-3">
          <ValidationError message={errorMessage} />
        </div>
      )}
    </div>
  );
};

export default VerifyCheckout;
