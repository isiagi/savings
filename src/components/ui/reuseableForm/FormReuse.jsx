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
      setNoCreateLoading();
      messageApi.success("Data created successfully!", 5);
      setDataCreated();
    } catch (error) {
      console.log(error);
      setNoCreateLoading();
      // if (error.response && error.response.data) {
      //   // Assuming the error response is an object where each key contains an array of error messages
      //   const errorMessages = error.response.data;
      //   for (const key in errorMessages) {
      //     if (errorMessages[key] && errorMessages[key].length > 0) {
      //       errorMessages[key].forEach((msg) => {
      //         if (msg.includes("username") && msg.includes("does not exist")) {
      //           const customMessage = `Member with provided Membership Id not found.`;
      //           messageApi.error(customMessage, 5);
      //         } else if (
      //           msg.includes("reference_no") &&
      //           msg.includes("does not exist")
      //         ) {
      //           const customMessage = `Loan with provided Reference Number not found.`;
      //           messageApi.error(customMessage, 5);
      //         } else {
      //           messageApi.error(msg, 5);
      //         }
      //       });
      //     }
      //   }
      // } else {
      //   messageApi.error("An unexpected error occurred.", 7);
      // }
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
