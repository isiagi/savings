/* eslint-disable @typescript-eslint/no-explicit-any */

import { Form, Input, Button, Upload } from "antd";
import React from "react";
import { useEffect } from "react";

type Props = {
  onFinish: any;
  formFields: any;
  initialValues: any;
  formId?: any;
};

const ReusableForm = ({
  onFinish,
  formFields,
  initialValues,
  formId,
}: Props) => {
  const [form] = Form.useForm();

  const isUploadComponent = (inputComponent: any) => {
    return inputComponent && inputComponent.type === Upload;
  };

  useEffect(() => formId.resetFields(), [initialValues]);

  const handleSubmit = (values: any) => {
    onFinish(values);
    form.resetFields();
  };

  return (
    <div className=" mx-auto">
      <Form form={formId} layout="vertical" onFinish={handleSubmit}>
        {formFields.map((field: any, index: any) => (
          <Form.Item
            key={index}
            name={field.name}
            label={field.label}
            rules={field.rules}
            style={{ marginBottom: "0px" }}
            initialValue={initialValues && initialValues[`${field.name}`]}
            valuePropName={
              isUploadComponent(field.inputComponent) ? "fileList" : undefined
            }
            getValueFromEvent={
              isUploadComponent(field.inputComponent)
                ? (e: any) => {
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
