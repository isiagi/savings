import { DatePicker, Input, Select } from "antd";

const savingFormFields = [
  {
    name: "member_id",
    label: "Membership ID:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "member_name",
    label: "Member's Name:",
    rules: [{ required: true, message: "Please enter your Member's Name" }],
  },
  {
    name: "amount",
    label: "Amount:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "date_of_paymen",
    label: "Date Of Deposit:",
    rules: [{ required: true, message: "Please enter your name" }],
    inputComponent: <DatePicker className="w-full" />,
  },
];

const paymentFormFields = [
  {
    name: "providerName",
    label: "Loan Reference No.:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "payee",
    label: "Payee:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "amount",
    label: "Amount:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
];

const loanFormFields = [
  {
    name: "member_name",
    label: "Name:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "member_id",
    label: "Member Id:",
    rules: [{ required: true, message: "Please enter your name" }],
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

const userFormFields = [
  {
    name: "fullName",
    label: "Full Name:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "contact",
    label: "Contact:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "placeOfResidence",
    label: "Place of residence:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "membershipId",
    label: "Membership ID:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "occupation",
    label: "Occupation:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "photo",
    label: "Photo:",
    rules: [
      { required: true, message: "Please enter your email" },
      { type: "email", message: "Please enter a valid email" },
    ],
    inputComponent: <Input type="email" />,
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
];

const formFields = {
  savingFormFields,
  paymentFormFields,
  loanFormFields,
  borrowerFormFields,
  userFormFields,
};

export default formFields;
