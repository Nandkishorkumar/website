import Button from "@components/ui/button";
import Input from "@components/ui/input";
import Label from "@components/ui/label";
import Radio from "@components/ui/radio/radio";
import TextArea from "@components/ui/text-area";
import { useUI } from "@contexts/ui.context";
import { useUpdateCustomerMutation, AddressType } from "@graphql/auth.graphql";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  __typename?: string;
  title: string;
  type: AddressType;
  address: {
    country: string;
    city: string;
    state: string;
    zip: string;
    street_address: string;
  };
};

const addressSchema = yup.object().shape({
  type: yup
    .string()
    .oneOf([AddressType.Billing, AddressType.Shipping])
    .required(),
  title: yup.string().required(),
  address: yup.object().shape({
    country: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    street_address: yup.string().required(),
  }),
});

const CreateOrUpdateAddressForm = () => {
  const {
    modalData: { customerId, address, type },
    closeModal,
  } = useUI();
  const [updateProfile] = useUpdateCustomerMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(addressSchema),
    defaultValues: {
      title: address?.title ?? "",
      type: address?.type ?? type,
      ...(address?.address && address),
    },
  });
  function onSubmit(values: FormValues) {
    const { __typename, ...rest } = values;
    updateProfile({
      variables: {
        id: customerId,
        address: {
          upsert: [
            {
              ...(address?.id ? { id: address.id } : {}),
              ...rest,
            },
          ],
        },
      },
    });
    return closeModal();
  }
  return (
    <div className="p-5 sm:p-8 bg-white">
      <h1 className="text-heading font-semibold text-lg text-center mb-4 sm:mb-6">
        {address ? "Update" : "Add New"} Address
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="grid grid-cols-2 gap-5 h-full"
      >
        <div>
          <Label>Type</Label>
          <div className="space-x-4 flex items-center">
            <Radio
              id="billing"
              {...register("type")}
              type="radio"
              value={AddressType.Billing}
              label="Billing"
            />
            <Radio
              id="shipping"
              {...register("type")}
              type="radio"
              value={AddressType.Shipping}
              label="Shipping"
            />
          </div>
        </div>

        <Input
          label="Title"
          {...register("title")}
          error={errors.title?.message}
          variant="outline"
          className="col-span-2"
        />

        <Input
          label="Country"
          {...register("address.country")}
          error={errors.address?.country?.message}
          variant="outline"
        />

        <Input
          label="City"
          {...register("address.city")}
          error={errors.address?.city?.message}
          variant="outline"
        />

        <Input
          label="State"
          {...register("address.state")}
          error={errors.address?.state?.message}
          variant="outline"
        />

        <Input
          label="ZIP"
          {...register("address.zip")}
          error={errors.address?.zip?.message}
          variant="outline"
        />

        <TextArea
          label="Street Address"
          {...register("address.street_address")}
          error={errors.address?.street_address?.message}
          variant="outline"
          className="col-span-2"
        />

        <Button className="w-full col-span-2">
          {address ? "Update" : "Save"} Address
        </Button>
      </form>
    </div>
  );
};

export default CreateOrUpdateAddressForm;
