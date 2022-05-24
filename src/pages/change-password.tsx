import Layout from "@components/layout/layout";
import { useForm } from "react-hook-form";
import Button from "@components/ui/button";
import { useChangePasswordMutation } from "@graphql/auth.graphql";
import ProfileSidebar from "@components/profile/profile-sidebar";
import Card from "@components/ui/card";
import { GetServerSideProps } from "next";
import { parseContextCookie } from "@utils/parse-cookie";
import PasswordInput from "@components/ui/password-input";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const cookies = parseContextCookie(context?.req?.headers?.cookie);
  if (!cookies?.auth_token) {
    return { redirect: { destination: "/", permanent: false } };
  }
  return {
    props: {},
  };
};

interface FormValues {
  oldPassword: string;
  newPassword: string;
  passwordConfirmation: string;
}
const changeSchema = yup.object().shape({
  oldPassword: yup.string().required(),
  newPassword: yup.string().required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Mismatched passwords")
    .required("Please confirm your password"),
});
const ChangePasswordPage = () => {
  const [changePassword, { loading }] = useChangePasswordMutation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(changeSchema),
  });
  async function onSubmit({ newPassword, oldPassword }: FormValues) {
    const { data } = await changePassword({
      variables: {
        input: {
          newPassword,
          oldPassword,
        },
      },
    });
    if (!data?.changePassword?.success) {
      setError("oldPassword", {
        type: "manual",
        message: data?.changePassword?.message ?? "",
      });
    } else {
      toast.success("Password changed successfully");
    }
  }
  return (
    <div className="flex flex-col xl:flex-row items-start max-w-1920 w-full mx-auto py-10 px-8 xl:py-14 xl:px-16 2xl:px-20 bg-gray-100">
      <ProfileSidebar className="flex-shrink-0 hidden xl:block xl:w-80 mr-10" />
      {/* End of sidebar navigation */}
      <Card className="w-full">
        <h1 className="mb-5 sm:mb-8 text-lg sm:text-xl text-heading font-semibold">
          Change Password
        </h1>

        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col"
        >
          <PasswordInput
            label="Old Password"
            {...register("oldPassword")}
            error={errors.oldPassword?.message}
            className="mb-5"
            variant="outline"
          />
          <PasswordInput
            label="New Password"
            {...register("newPassword")}
            error={errors.newPassword?.message}
            className="mb-5"
            variant="outline"
          />
          <PasswordInput
            label="Confirm Password"
            {...register("passwordConfirmation")}
            error={errors.passwordConfirmation?.message}
            className="mb-5"
            variant="outline"
          />
          <Button loading={loading} disabled={loading} className="ml-auto">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};
ChangePasswordPage.Layout = Layout;
export default ChangePasswordPage;
