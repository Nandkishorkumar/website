import Address from "@components/address/address";
import Schedule from "@components/checkout/schedule";
import Layout from "@components/layout/layout";
import ErrorMessage from "@components/ui/error-message";
import { useCustomerQuery } from "@graphql/auth.graphql";
import VerifyCheckout from "@components/checkout/verify-checkout";
import { useEffect } from "react";
import { useUI } from "@contexts/ui.context";

export default function CheckoutPage() {
  const { data, error, refetch } = useCustomerQuery();
  const { isAuthorize, openModal, setModalView } = useUI();

  useEffect(() => {
    if (!isAuthorize) {
      setModalView("LOGIN_VIEW");
      return openModal();
    }
    if (isAuthorize) {
      refetch();
    }
  }, [isAuthorize]);
  if (error) return <ErrorMessage message={error.message} />;
  return (
    <div className="py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start m-auto lg:space-x-8 w-full max-w-5xl">
        <div className="lg:max-w-2xl w-full space-y-6">
          <div className="shadow-700 bg-white p-5 md:p-8">
            <Address
              id={data?.me?.id!}
              heading="Billing Address"
              addresses={data?.me?.address?.filter(
                (address: any) => address.type === "BILLING"
              )}
              count={1}
              type="BILLING"
            />
          </div>
          <div className="shadow-700 bg-white p-5 md:p-8">
            <Address
              id={data?.me?.id!}
              heading="Shipping Address"
              addresses={data?.me?.address?.filter(
                (address: any) => address.type === "SHIPPING"
              )}
              count={2}
              type="SHIPPING"
            />
          </div>
          <div className="shadow-700 bg-white p-5 md:p-8">
            <Schedule count={3} />
          </div>
        </div>
        <div className="w-full lg:w-96 mb-10 sm:mb-12 lg:mb-0 mt-10">
          <VerifyCheckout />
        </div>
      </div>
    </div>
  );
}
CheckoutPage.Layout = Layout;
