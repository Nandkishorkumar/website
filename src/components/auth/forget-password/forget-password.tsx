import { useState } from "react";
import {
  useForgetPasswordMutation,
  useVerifyForgetPasswordTokenMutation,
  useResetPasswordMutation,
} from "@graphql/auth.graphql";
import Logo from "@components/ui/logo";
import Alert from "@components/ui/alert";
import { useUI } from "@contexts/ui.context";
import dynamic from "next/dynamic";
const EnterEmailView = dynamic(() => import("./enter-email-view"));
const EnterTokenView = dynamic(() => import("./enter-token-view"));
const EnterNewPasswordView = dynamic(() => import("./enter-new-password-view"));

const ForgetPassword = () => {
  const { setModalView } = useUI();
  const [forgetPassword, { loading }] = useForgetPasswordMutation();
  const [
    verifyToken,
    { loading: verifying },
  ] = useVerifyForgetPasswordTokenMutation();
  const [resetPassword, { loading: resetting }] = useResetPasswordMutation();
  const [errorMsg, setErrorMsg] = useState<string | null | undefined>("");

  const [verifiedEmail, setVerifiedEmail] = useState("");
  const [verifiedToken, setVerifiedToken] = useState("");

  async function handleEmailSubmit({ email }: { email: string }) {
    const response = await forgetPassword({
      variables: {
        input: {
          email,
        },
      },
    });
    if (response?.data?.forgetPassword?.success) {
      setVerifiedEmail(email);
    } else {
      setErrorMsg(response?.data?.forgetPassword?.message);
    }
  }
  async function handleTokenSubmit({ token }: { token: string }) {
    const response = await verifyToken({
      variables: {
        input: {
          email: verifiedEmail,
          token,
        },
      },
    });
    if (response?.data?.verifyForgetPasswordToken?.success) {
      setVerifiedToken(token);
    } else {
      setErrorMsg(response?.data?.verifyForgetPasswordToken?.message);
    }
  }
  async function handleResetPassword({ password }: { password: string }) {
    const response = await resetPassword({
      variables: {
        input: {
          email: verifiedEmail,
          token: verifiedToken,
          password,
        },
      },
    });
    if (response?.data?.resetPassword?.success) {
      setModalView("LOGIN_VIEW");
    } else {
      setErrorMsg(response?.data?.resetPassword?.message);
    }
  }

  return (
    <div className="py-6 px-5 sm:p-8 bg-white w-screen md:max-w-md h-screen md:h-auto flex flex-col justify-center">
      <div className="flex justify-center">
        <Logo />
      </div>
      <p className="text-center text-sm md:text-base leading-relaxed text-body mt-4 sm:mt-5 mb-7 sm:mb-10">
        We'll send you a link to reset your password
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
      {!verifiedEmail && (
        <EnterEmailView loading={loading} onSubmit={handleEmailSubmit} />
      )}
      {verifiedEmail && !verifiedToken && (
        <EnterTokenView loading={verifying} onSubmit={handleTokenSubmit} />
      )}
      {verifiedEmail && verifiedToken && (
        <EnterNewPasswordView
          loading={resetting}
          onSubmit={handleResetPassword}
        />
      )}

      <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-9 sm:mt-11 mb-7 sm:mb-8">
        <hr className="w-full" />
        <span className="absolute left-2/4 -top-2.5 px-2 -ml-4 bg-white">
          Or
        </span>
      </div>
      <div className="text-sm sm:text-base text-body text-center">
        Back to{" "}
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

export default ForgetPassword;
