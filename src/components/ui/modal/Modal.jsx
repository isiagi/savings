import PropTypes from "prop-types";

import { Form, Modal } from "antd";
import useStore from "../../../global/GlobalStates";
import FormReuse from "../reuseableForm/FormReuse";

const ModalComponent = ({ data, title, api }) => {
  const { addModalState, closeAddModal } = useStore((state) => ({
    addModalState: state.addModalState,
    closeAddModal: state.closeAddModal,
  }));

  const [form] = Form.useForm();

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleOk = (values) => {
  //   alert("Added Successfully");
  //   alert(values);
  //   // closeAddModal();
  // };
  const handleCancel = () => {
    form.resetFields();
    closeAddModal();
  };
  return (
    <>
      <Modal
        title={title}
        open={addModalState}
        onOk={form.submit}
        onCancel={handleCancel}
      >
        <FormReuse
          initialValues={data}
          formFields={data}
          title="Create Agent"
          api={api}
          // handleFormSubmit={handleOk}
          formId={form}
          closeAddModal={closeAddModal}
        />
      </Modal>
    </>
  );
};

ModalComponent.propTypes = {
  data: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModalComponent;
