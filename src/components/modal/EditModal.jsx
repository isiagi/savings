import PropTypes from "prop-types";

import { Form, Modal } from "antd";
import useStore from "../../global/GlobalStates";

import EditFormReuse from "../reuseableForm/EditFormReuse";

const EditModalComponent = ({ data, title }) => {
  const { editModalState, closeEditModal } = useStore((state) => ({
    editModalState: state.editModalState,
    closeEditModal: state.closeEditModal,
  }));

  const [form] = Form.useForm();

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleOk = (values) => {
  //   alert("Added Successfully");
  //   alert(values);
  //   // closeEditModal();
  // };
  const handleCancel = () => {
    form.resetFields();
    closeEditModal();
  };
  return (
    <>
      <Modal
        title={title}
        open={editModalState}
        onOk={form.submit}
        onCancel={handleCancel}
      >
        <EditFormReuse
          initialValues={data}
          formFields={data}
          title="Create Agent"
          api="/v1/agents"
          // handleFormSubmit={handleOk}
          formId={form}
        />
      </Modal>
    </>
  );
};

EditModalComponent.propTypes = {
  data: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default EditModalComponent;
