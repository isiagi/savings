/* eslint-disable react/prop-types */

import { Form, Input, Upload } from "antd";

import { useEffect } from "react";

// type Props = {
//   onFinish: any;
//   formFields: any;
//   initialValues: any;
//   formId?: any;
// };

const ReusableForm = ({ onFinish, formFields, initialValues, formId }) => {
  // const [form] = Form.useForm();

  const isUploadComponent = (inputComponent) => {
    return inputComponent && inputComponent.type === Upload;
  };

  useEffect(() => formId.resetFields(), [initialValues]);
  console.log("ini", initialValues);

  const handleSubmit = (values) => {
    const formData = new FormData();

    for (const name in values) {
      if (name === "image_url") {
        formData.append(name, values[name][0].originFileObj);
      }
      formData.append(name, values[name]); // there should be values.avatar which is a File object
    }
    try {
      onFinish(formData);
      formId.resetFields();
    } catch (error) {
      formId.resetFields();
    }
  };

  return (
    <div className=" mx-auto">
      <Form form={formId} layout="vertical" onFinish={handleSubmit}>
        {formFields.map((field, index) => (
          <Form.Item
            key={index}
            name={field.name}
            label={field.label}
            rules={field.rules}
            style={{ marginBottom: "5px" }}
            initialValue={initialValues && initialValues[`${field.name}`]}
            valuePropName={
              isUploadComponent(field.inputComponent) ? "fileList" : undefined
            }
            getValueFromEvent={
              isUploadComponent(field.inputComponent)
                ? (e) => {
                    if (Array.isArray(e)) {
                      return e;
                    }
                    return e && e.fileList;
                  }
                : undefined
            }
          >
            {field.inputComponent ? field.inputComponent : <Input />}
          </Form.Item>
        ))}
        {/* <Form.Item>
          <Button type="primary" className="bg-blue-500 mt-5" htmlType="submit">
            Submit
          </Button>
        </Form.Item> */}
      </Form>
    </div>
  );
};

export default ReusableForm;
