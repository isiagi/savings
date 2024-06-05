/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";
import ReusableForm from "./ReuseableForm";
// import editData from "../../utils/editData";
import editData from "../../api/api_routes/editData";
import useCreate from "../../../global/DataState";
import editMultiData from "../../api/api_routes/editMultiData";
import { message } from "antd";
import { format } from "date-fns";

// type Props = {
//   formFields: any;
//   initialValues: any;
//   api?: string;
//   title: string;
//   formId: any;
//   closeEditModal: any;
//   id: any;
// };

function EditFormReuse({
  formFields,
  initialValues,
  api,
  formId,
  closeEditModal,
  id,
}) {
  const [messageApi, contextHolder] = message.useMessage();
  const setDataCreated = useCreate((state) => state.setDataCreated);
  const obj = useParams();

  // alert(obj.id);

  const handleFormSubmit = async (values) => {
    console.log(values);
    try {
      if (obj.id) {
        await editMultiData(`${api}/${id}`, values);
        messageApi.success("Update successfully!", 5);
        setDataCreated();
        closeEditModal();

        return;
      }

      await editData(`${obj.key != "2" ? api : "auth"}/${id}`, values);
      setDataCreated();
      messageApi.success("Update successfully!", 5);
      closeEditModal();
    } catch (error) {
      if (error.response && error.response.data) {
        // Assuming the error response is an object where each key contains an array of error messages
        const errorMessages = error.response.data;
        for (const key in errorMessages) {
          if (errorMessages[key] && errorMessages[key].length > 0) {
            errorMessages[key].forEach((msg) => messageApi.error(msg, 5));
          }
        }
      } else {
        messageApi.error("An unexpected error occurred.", 5);
      }
    }
  };
  // Not working Now, Testing still needed
  const tr = () => {
    return [initialValues].map((item) => {
      for (const key in initialValues) {
        if (key.includes("date")) {
          const date = new Date(item[key]);
          item[key] = format(date, "yyyy-MM-dd");
        }
      }
    });
  };
  tr();

  console.log(initialValues.date_of_payment);

  return (
    <div className="w-full text-center flex justify-center items-center">
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

export default EditFormReuse;
