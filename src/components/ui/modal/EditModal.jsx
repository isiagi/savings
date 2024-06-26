import PropTypes from "prop-types";

import { Form, Modal } from "antd";
import useStore from "../../../global/GlobalStates";

import EditFormReuse from "../reuseableForm/EditFormReuse";
import useCreate from "../../../global/DataState";

const EditModalComponent = ({ data, title, initial, api, id }) => {
  const { editModalState, closeEditModal } = useStore((state) => ({
    editModalState: state.editModalState,
    closeEditModal: state.closeEditModal,
  }));

  const [form] = Form.useForm();

  const createLoading = useCreate((state) => state.createLoading);

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
        confirmLoading={createLoading}
      >
        <EditFormReuse
          initialValues={initial}
          formFields={data}
          title="Create Agent"
          api={api}
          id={id}
          // handleFormSubmit={handleOk}
          formId={form}
          closeEditModal={closeEditModal}
        />
      </Modal>
    </>
  );
};

EditModalComponent.propTypes = {
  data: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  initial: PropTypes.any.isRequired,
  id: PropTypes.any.isRequired,
  api: PropTypes.any.isRequired,
};

export default EditModalComponent;
