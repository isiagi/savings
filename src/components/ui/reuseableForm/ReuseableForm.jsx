/* eslint-disable react/prop-types */

import { DatePicker, Form, Input, Upload } from "antd";
import { Checkbox } from "antd";
import dayjs from "dayjs";

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

  useEffect(() => formId.resetFields(), [initialValues, formId]);
  // console.log("ini", initialValues);

  const handleChange = (value, name) => {
    console.log("vale", value);
    console.log("vale", name);
    const obj = {};
    obj[name] = value;
    formId.setFieldsValue(obj);
  };

  const onChange = (e) => {
    console.log(`checked = `);
    formId.setFieldsValue({
      is_staff: `${e.target.checked == true ? "True" : "False"}`,
    });
  };

  const handleSubmit = (values) => {
    console.log("values", values);
    const formData = new FormData();

    for (const name in values) {
      if (name === "image_url") {
        formData.append(name, values[name][0].originFileObj);
      } else if (name === "is_staff") {
        formData.append(name, values[name] === true ? "True" : "False");
      } else {
        formData.append(name, values[name]); // there should be values.avatar which is a File object
      }
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
          if (
            field.name === "membership_id" ||
            field.name === "reference" ||
            field.name === "member_id" ||
            field.name === "name" ||
            field.name === "member_name" ||
            field.name === "payee"
          ) {
            return (
              <Form.Item
                rules={[
                  { required: true, message: `${field.name} is required` },
                ]}
                name={field.name}
                label={field.label}
                initialValue={initialValues && initialValues[`${field.name}`]}
                key={index}
                className="mb-2"
              >
                <SelectOptions
                  initialValue={initialValues && initialValues[`${field.name}`]}
                  handleChange={(value) => handleChange(value, field.name)}
                  path={field.path}
                />
              </Form.Item>
            );
          } else if (field.name.includes("date")) {
            return (
              <Form.Item
                key={index}
                name={field.name}
                label={field.name}
                style={{ marginBottom: "0px" }}
                rules={[
                  {
                    required: true,
                  },
                ]}
                initialValue={initialValues && initialValues[`${field.name}`]}
                getValueFromEvent={(_date, dateString) => dateString} // Extract dateString directly
                getValueProps={(value) => ({
                  value: value ? dayjs(value) : undefined, // Convert moment object to value
                })}
              >
                <DatePicker className="w-full" format="YYYY-MM-DD" />
              </Form.Item>
            );
          } else if (field.name.includes("is_staff")) {
            return (
              <Form.Item
                rules={[
                  { required: true, message: `${field.name} is required` },
                ]}
                name={field.name}
                label={field.label}
                initialValue={initialValues && initialValues[`${field.name}`]}
                key={index}
                className="mb-2"
              >
                <Checkbox
                  defaultChecked={
                    initialValues && initialValues[`${field.name}`]
                  }
                  onChange={onChange}
                >
                  Set Admin Member
                </Checkbox>
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
