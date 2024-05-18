/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import ReusableForm from "./ReuseableForm";
// import editData from "../../utils/editData";
import React from "react";
import editData from "../../api/api_routes/editData";

type Props = {
  formFields: any;
  initialValues: any;
  api?: string;
  title: string;
  formId: any;
  closeEditModal: any;
  id: any;
};

function EditFormReuse({
  formFields,
  initialValues,
  api,
  title,
  formId,
  closeEditModal,
  id,
}: Props) {
  const navigate = useNavigate();

  const handleFormSubmit = async (values: any) => {
    await editData(`${api}/${id}`, values);

    // navigate(-1);
    closeEditModal();
  };
  return (
    <div className="w-full text-center flex justify-center items-center">
      <div className="w-full">
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
