/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import ReusableForm from "./ReuseableForm";
// import editData from "../../utils/editData";
import React from "react";

type Props = {
  formFields: any;
  initialValues: any;
  api?: string;
  title: string;
  formId: any;
};

function EditFormReuse({
  formFields,
  initialValues,
  api,
  title,
  formId,
}: Props) {
  const navigate = useNavigate();

  const handleFormSubmit = async (values: any) => {
    // await editData(api, values);

    navigate(-1);
  };
  return (
    <div className="w-full text-center min-h-[70vh] flex justify-center items-center">
      <div className="w-full">
        <h1 className="py-5">{title}</h1>
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
