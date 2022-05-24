import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useApolloClient } from "@apollo/client";
import { useLogoutMutation } from "@graphql/auth.graphql";
import Spinner from "@components/ui/loaders/spinner/spinner";

export default function SignOut() {
  const client = useApolloClient();
  const router = useRouter();
  const [signOut] = useLogoutMutation();

  useEffect(() => {
    signOut().then(() => {
      client.resetStore().then(() => {
        Cookies.remove("auth_token");
        Cookies.remove("auth_permissions");
        router.push("/");
      });
    });
  }, [signOut, router, client]);

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <Spinner text="Signing out..." />
      </div>
    </div>
  );
}
