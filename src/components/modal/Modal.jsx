import { Modal } from "antd";
import useStore from "../../global/GlobalStates";

const ModalComponent = () => {
  const { addModalState, closeAddModal } = useStore((state) => ({
    addModalState: state.addModalState,
    closeAddModal: state.closeAddModal,
  }));

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  const handleOk = () => {
    closeAddModal();
  };
  const handleCancel = () => {
    closeAddModal();
  };
  return (
    <>
      <Modal
        title="Add User"
        open={addModalState}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default ModalComponent;
