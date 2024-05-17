/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
// import createData from "../../hooks/createData";
import ReusableForm from "./ReuseableForm";
import React from "react";
import useCreateData from "../../../hooks/useCreateData";

type Props = {
  formFields: any;
  initialValues: any;
  api?: string;
  title: string;
  handleFormSubmit: (values: any) => void;
  formId: any;
  closeAddModal: any;
};

function FormReuse({
  formFields,
  initialValues,
  api,
  title,
  formId,
  closeAddModal,
}: Props) {
  const navigate = useNavigate();

  const handleFormSubmit = async (values: any) => {
    // await createData(api, values);
    await useCreateData(api, values);
    alert("purple smile");
    closeAddModal();
    // navigate(-1);
  };
  return (
    <div className="w-full text-center  flex justify-center items-center">
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

export default FormReuse;
