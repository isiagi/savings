/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import ReusableForm from "./ReuseableForm";
// import editData from "../../utils/editData";
import React from "react";
import editData from "../../api/api_routes/editData";
import useCreate from "../../../global/DataState";
import editMultiData from "../../api/api_routes/editMultiData";

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
  const setDataCreated = useCreate((state) => state.setDataCreated);
  const obj = useParams();

  // alert(obj.id);

  const handleFormSubmit = async (values: any) => {
    console.log(values);

    if (obj.id) {
      await editMultiData(`${api}/${id}`, values);

      setDataCreated();
      closeEditModal();

      return;
    }

    await editData(`${obj.key != "2" ? api : "auth"}/${id}`, values);
    setDataCreated();

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
