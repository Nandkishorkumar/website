import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useApolloClient } from "@apollo/client";
import { useRegisterMutation } from "@graphql/auth.graphql";
import Logo from "@components/ui/logo";
import Alert from "@components/ui/alert";
import Input from "@components/ui/input";
import PasswordInput from "@components/ui/password-input";
import Button from "@components/ui/button";
import { useUI } from "@contexts/ui.context";
import { getErrorMessage } from "@utils/form-error";
import { CUSTOMER, SUPER_ADMIN } from "@utils/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const registerFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const RegisterForm = () => {
  const client = useApolloClient();
  const [Register, { loading }] = useRegisterMutation();
  const [errorMsg, setErrorMsg] = useState("");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(registerFormSchema),
  });
  const router = useRouter();
  const { authorize, closeModal, setModalView } = useUI();
  function handleNavigate(path: string) {
    router.push(`/${path}`);
    closeModal();
  }
  async function onSubmit(values: FormValues) {
    try {
      await client.resetStore();
      const { data } = await Register({
        variables: {
          ...values,
        },
      });
      if (data?.register?.token) {
        if (
          data?.register?.permissions?.length &&
          (data?.register?.permissions.includes(CUSTOMER) ||
            data?.register?.permissions.includes(SUPER_ADMIN))
        ) {
          Cookies.set("auth_token", data?.register?.token);
          Cookies.set("auth_permissions", data?.register?.permissions);
          authorize();
        } else {
          setErrorMsg("Doesn't have enough permission");
        }
      } else {
        setErrorMsg("The credentials was wrong!");
      }
    } catch (error) {
      const serverErrors = getErrorMessage(error);
      Object.keys(serverErrors?.validation).forEach((field: any) => {
        setError(field.split(".")[1], {
          type: "manual",
          message: serverErrors?.validation[field][0],
        });
      });
    }
  }
  return (
    <div className="py-6 px-5 sm:p-8 bg-white w-screen md:max-w-md h-screen md:h-auto flex flex-col justify-center">
      <div className="flex justify-center">
        <Logo />
      </div>
      <p className="text-center text-sm md:text-base leading-relaxed px-2 sm:px-0 text-body mt-4 sm:mt-5 mb-7 sm:mb-10">
        By signing up, you agree to our
        <span
          onClick={() => handleNavigate("terms")}
          className="mx-1 underline cursor-pointer text-primary hover:no-underline"
        >
          terms
        </span>
        &
        <span
          onClick={() => handleNavigate("privacy")}
          className="ml-1 underline cursor-pointer text-primary hover:no-underline"
        >
          policy
        </span>
      </p>
      {errorMsg && (
        <Alert
          variant="error"
          message={errorMsg}
          className="mb-6"
          closeable={true}
          onClose={() => setErrorMsg("")}
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          label="Name"
          {...register("name")}
          variant="outline"
          className="mb-5"
          error={errors.name?.message}
        />
        <Input
          label="Email"
          {...register("email")}
          type="email"
          variant="outline"
          className="mb-5"
          error={errors.email?.message}
        />
        <PasswordInput
          label="Password"
          {...register("password")}
          error={errors.password?.message}
          variant="outline"
          className="mb-5"
        />
        <div className="mt-8">
          <Button className="w-full h-12" loading={loading} disabled={loading}>
            Register
          </Button>
        </div>
      </form>
      {/* End of forgot register form */}

      <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-11 mb-6 sm:mb-8">
        <hr className="w-full" />
        <span className="absolute left-2/4 -top-2.5 px-2 -ml-4 bg-white">
          Or
        </span>
      </div>
      <div className="text-sm sm:text-base text-body text-center">
        Already have an account?{" "}
        <button
          onClick={() => setModalView("LOGIN_VIEW")}
          className="ml-1 underline text-primary font-semibold transition-colors duration-200 focus:outline-none hover:text-primary-2 focus:text-primary-2 hover:no-underline focus:no-underline"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
