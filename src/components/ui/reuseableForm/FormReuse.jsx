/* eslint-disable react/prop-types */

// import createData from "../../hooks/createData";
// import ReusableForm from "./ReuseableForm";

import useCreateData from "../../../hooks/useCreateData";

import useCreate from "../../../global/DataState";
import { message } from "antd";
import ReusableForm from "./ReuseableForm";

// type Props = {
//   formFields: any;
//   initialValues: any;
//   api?: string;
//   title: string;
//   handleFormSubmit: (values: any) => void;
//   formId: any;
//   closeAddModal: any;
// };

function FormReuse({
  formFields,
  initialValues,
  api,

  formId,
  closeAddModal,
}) {
  const [messageApi, contextHolder] = message.useMessage();

  // const [res, loading, refetchData] = useFetchData(api);
  const setDataCreated = useCreate((state) => state.setDataCreated);
  const setCreateLoading = useCreate((state) => state.setCreateLoading);
  const setNoCreateLoading = useCreate((state) => state.setNoCreateLoading);

  const handleFormSubmit = async (values) => {
    // await createData(api, values);
    console.log(values);
    try {
      setCreateLoading();
      // eslint-disable-next-line react-hooks/rules-of-hooks
      await useCreateData(api, values);
      console.log("Setting dataCreated to true");
      setDataCreated();
      messageApi.success("Data created successfully!", 5);
    } catch (error) {
      console.error("Error:", error);
      messageApi.error(
        error.response?.data?.detail ||
          error.response?.data?.Error.username[0] ||
          "Error creating data",
        5
      );
    } finally {
      setNoCreateLoading();
      closeAddModal();
    }

    // alert("purple smile");
    closeAddModal();
    // navigate(0);
  };
  return (
    <div className="w-full text-center  flex justify-center items-center">
      <div className="w-full">
        {contextHolder}
        <ReusableForm
          onFinish={handleFormSubmit}
          formFields={formFields}
          initialValues={initialValues}
          formId={formId}
        />
      </div>
    </div>
  );
}

export default FormReuse;
