import Button from "@components/ui/button";
import Input from "@components/ui/input";
import { useUpdateCustomerMutation } from "@graphql/auth.graphql";
import { maskPhoneNumber } from "@utils/mask-phone-number";
import { useForm } from "react-hook-form";

interface Props {
  initialValues: {
    contact: string;
  };
  userId: string;
  profileId: string;
}
interface FormValues {
  contact: string;
}
const defaultValues = {
  contact: "",
};
const ContactForm = ({ initialValues, userId, profileId }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,

    formState: {
      errors,
    },
  } = useForm<FormValues>({
    defaultValues: initialValues ?? defaultValues,
  });
  const [updateProfile] = useUpdateCustomerMutation();
  function onSubmit(value: FormValues) {
    updateProfile({
      variables: {
        id: userId,
        profile: {
          upsert: {
            id: profileId,
            contact: value.contact,
          },
        },
      },
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex">
      <Input
        {...register('contact')}
        label="Enter Your Contact Number"
        className="flex-1"
        onChange={(e) => setValue("contact", maskPhoneNumber(e.target.value))}
        error={errors?.contact?.message} />
      <Button>{initialValues ? "Edit" : "Add"} Contact</Button>
    </form>
  );
};

export default ContactForm;
