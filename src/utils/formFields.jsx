import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Image, Input, Select, Upload } from "antd";

const savingFormFields = [
  {
    name: "member_id",
    label: "Membership ID:",
    rules: [{ required: true, message: "Please enter your name" }],
    path: "auth/meta",
  },
  // {
  //   name: "member_name",
  //   label: "Member's Name:",
  //   rules: [{ required: true, message: "Please enter your Member's Name" }],
  //   path: "auth/meta/names",
  // },
  {
    name: "date_of_payment",
    label: "Date Of Deposit:",
    rules: [{ required: true, message: "Please enter your name" }],
    // inputComponent: <DatePicker className="w-full" />,
  },
  {
    name: "amount",
    label: "Amount:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
];

const paymentFormFields = [
  {
    name: "reference",
    label: "Loan Reference No.:",
    rules: [
      { required: true, message: "Please enter your Loan Reference No." },
    ],
    path: "loan/meta",
  },
  {
    name: "payee",
    label: "Payee:",
    rules: [{ required: true, message: "Please enter your Payee's Name" }],
    path: "auth/meta/names",
  },
  {
    name: "amount",
    label: "Amount:",
    rules: [{ required: true, message: "Please enter your Amount" }],
  },
  {
    name: "penality",
    label: "Penalty:",
    rules: [{ required: true, message: "Please enter your Penalty" }],
  },
];

const loanFormFields = [
  // {
  //   name: "member_name",
  //   label: "Name:",
  //   rules: [{ required: true, message: "Please enter your name" }],
  //   path: "auth/meta/names",
  // },
  {
    name: "member_id",
    label: "Member Id:",
    rules: [{ required: true, message: "Please enter your name" }],
    path: "auth/meta",
  },
  {
    name: "type",
    label: "Loan Type:",
    rules: [{ required: true, message: "Please enter your Loan Type" }],
    inputComponent: (
      <Select
        defaultValue="Select Loan Type"
        className="w-full"
        allowClear
        options={[
          { value: "Soft Loan", label: "Soft Loan" },
          { value: "Short Term Loan", label: "Short Term Loan" },
          { value: "Long Term Loan", label: "Long Term Loan" },
        ]}
      />
    ),
  },
  {
    name: "plan",
    label: "Loan Plan:",
    rules: [{ required: true, message: "Please enter your name" }],
    inputComponent: (
      <Select
        defaultValue="Select Loan Plan"
        className="w-full"
        allowClear
        options={[
          { value: "A Month", label: "A Month" },
          { value: "2 Months", label: "2 Months" },
          { value: "3 Months", label: "3 Months" },
          { value: "4 Months", label: "4 Months" },
          { value: "5 Months", label: "5 Months" },
          { value: "6 Months", label: "6 Months" },
          { value: "7 Months", label: "7 Months" },
          { value: "8 Months", label: "8 Months" },
          { value: "9 Months", label: "9 Months" },
          { value: "10 Months", label: "10 Months" },
          { value: "11 Months", label: "11 Months" },
          { value: "12 Months", label: "12 Months" },
          { value: "13 Months", label: "13 Months" },
          { value: "14 Months", label: "14 Months" },
          { value: "15 Months", label: "15 Months" },
          { value: "16 Months", label: "16 Months" },
          { value: "17 Months", label: "17 Months" },
          { value: "18 Months", label: "18 Months" },
        ]}
      />
    ),
  },
  {
    name: "amount",
    label: "Loan Amount:",
    rules: [{ required: true, message: "Please enter your Loan Amount" }],
  },
  {
    name: "granteers",
    label: "Granteers:",
    rules: [{ required: true, message: "Please enter your Granteers" }],
    inputComponent: <Input.TextArea className="w-full" />,
  },
];

const borrowerFormFields = [
  {
    name: "country",
    label: "Membership ID:",
    rules: [{ required: true, message: "Please enter your name" }],
    inputComponent: (
      <Select
        defaultValue="Select Status"
        className="w-full"
        allowClear
        options={[
          { value: "AVAILABLE", label: "AVAILABLE" },
          { value: "CONTRACT APPROVAL", label: "CONTRACT APPROVAL" },
          { value: "APPROVAL BY MINISTRY", label: "APPROVAL BY MINISTRY" },
          { value: "TRAVELLED", label: "TRAVELLED" },
        ]}
      />
    ),
  },
  {
    name: "name",
    label: "Name:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
];

const userFormFielders = [
  {
    name: "username",
    label: "Membership ID:",
    rules: [
      { required: true, message: "Please enter your Membership ID" },
      {
        pattern: new RegExp(/(\d{3})\/(\d{4})/),
        message: "Membership ID must be in the format of 000/2020",
      },
    ],
    inputComponent: <Input addonBefore="ADA/" defaultValue="000/2020" />,
  },

  {
    name: "first_name",
    label: "First Name:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "last_name",
    label: "Last Name:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "email",
    label: "Email:",
    rules: [{ required: false, message: "Please enter your name" }],
  },
  // {
  //   name: "telephone",
  //   label: "Telephone:",
  //   rules: [{ required: true, message: "Please enter your Telephone Number" }],
  // },
];

const borrowFormFielders = [
  {
    name: "membership_id",
    label: "Membership ID:",
    rules: [{ required: true, message: "Please enter your name" }],
    path: "auth/meta",
  },
  // {
  //   name: "name",
  //   label: "Name:",
  //   rules: [{ required: true, message: "Please enter your name" }],
  //   path: "auth/meta/names",
  // },
];

const userProvideFields = [
  {
    name: "last_name",
    label: "last Name:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "first_name",
    label: "First Name:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "email",
    label: "Email:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "nin",
    label: "Nin_number:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "residence",
    label: "Place of residence:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "occupation",
    label: "Occupation:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "telephone",
    label: "Telephone:",
    rules: [{ required: true, message: "Please enter your name" }],
  },

  {
    name: "gender",
    label: "Gender:",
    rules: [{ required: true, message: "Please enter your Gender" }],
    inputComponent: (
      <Select
        defaultValue="Select Gender"
        className="w-full"
        allowClear
        options={[
          { value: "female", label: "Female" },
          { value: "male", label: "Male" },
        ]}
      />
    ),
  },
  {
    name: "is_staff",
    label: "IsAdmin",
    rules: [{ required: true, message: "Please enter your Gender" }],
  },
  {
    name: "image_url",
    label: "Photo:",
    rules: [{ required: true, message: "Please enter your Photo" }],
    inputComponent: (
      <Upload
        beforeUpload={() => false}
        listType="picture"
        className="bg-red-500 w-full"
        maxCount={1}
      >
        <Button className="flex-1 max-w-[100%]" icon={<UploadOutlined />}>
          Click to Upload
        </Button>
        {/* <Image src=""/> */}
      </Upload>
    ),
  },
];

const formFields = {
  savingFormFields,
  paymentFormFields,
  loanFormFields,
  borrowerFormFields,
  userFormFielders,
  userProvideFields,
  borrowFormFielders,
};

export default formFields;
