/* eslint-disable react/prop-types */

import { Form, Input, Upload } from "antd";

import { useEffect } from "react";
import SelectOptions from "../../../utils/SelectOptions";

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

  const handleChange = (value, name) => {
    console.log("vale", value);
    console.log("vale", name);
    const obj = {};
    obj[name] = value;
    formId.setFieldsValue(obj);
  };

  const handleSubmit = (values) => {
    const formData = new FormData();

    console.log(values);

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
        {formFields.map((field, index) => {
          if (field.name === "membership_id" || field.name === "reference") {
            return (
              <Form.Item
                rules={[
                  { required: true, message: `${field.name} is required` },
                ]}
                name={field.name}
                label={field.label}
                key={index}
                className="mb-2"
              >
                <SelectOptions
                  handleChange={(value) => handleChange(value, field.name)}
                  path={field.path}
                />
              </Form.Item>
            );
          } else {
            return (
              <Form.Item
                key={index}
                name={field.name}
                label={field.label}
                rules={field.rules}
                style={{ marginBottom: "5px" }}
                initialValue={initialValues && initialValues[`${field.name}`]}
                valuePropName={
                  isUploadComponent(field.inputComponent)
                    ? "fileList"
                    : undefined
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
            );
          }
        })}
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
