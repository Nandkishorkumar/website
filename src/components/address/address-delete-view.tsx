import ConfirmationCard from "@components/common/confirmation-card";
import { useUI } from "@contexts/ui.context";
import { useDeleteAddressMutation } from "@graphql/address.graphql";
import { CustomerDocument } from "@graphql/auth.graphql";
import { getErrorMessage } from "@utils/form-error";

const AddressDeleteView = () => {
  const { closeModal, modalData } = useUI();
  const [deleteAddressById, { loading }] = useDeleteAddressMutation({
    refetchQueries: [{ query: CustomerDocument }],
  });

  function handleDelete() {
    try {
      deleteAddressById({
        variables: { id: modalData.addressId },
      });
      closeModal();
    } catch (error) {
      closeModal();
      getErrorMessage(error);
    }
  }
  return (
    <ConfirmationCard
      onCancel={closeModal}
      onDelete={handleDelete}
      deleteBtnLoading={loading}
    />
  );
};

export default AddressDeleteView;
