/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
// import createData from "../../hooks/createData";
import ReusableForm from "./ReuseableForm";
import React from "react";
import useCreateData from "../../../hooks/useCreateData";
import useFetchData from "../../../hooks/useFetchData";

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

  const [res, loading, refetchData] = useFetchData(api);

  const handleFormSubmit = async (values: any) => {
    // await createData(api, values);
    await useCreateData(api, values);
    // await refetchData();

    alert("purple smile");
    closeAddModal();
    // navigate(0);
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
