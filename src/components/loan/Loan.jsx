import { Input, Select } from "antd";

import PageUiComponent from "../ui/PageUiComponent";

const jobFormFields = [
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

function Loan() {
  const columns = [
    {
      title: "Name",
      dataIndex: "member_name",
      key: "member_name",
    },

    {
      title: "Membership Id",
      dataIndex: "member_id",
      key: "member_id",
    },

    {
      title: "Loan Type",
      dataIndex: "type",
      key: "type",
    },

    {
      title: "Loan Plan",
      dataIndex: "plan",
      key: "place",
    },
    {
      title: "Loan Reference",
      dataIndex: "reference_no",
      key: "reference_no",
    },
    {
      title: "Loan Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Loan Balance",
      dataIndex: "remaining_amount",
      key: "remaining_amount",
    },
    {
      title: "Granteers",
      dataIndex: "granteers",
      key: "granteers",
    },
  ];

  return (
    <PageUiComponent
      headerTitle={"Loans"}
      placeholder={"Search Loan"}
      modalFields={jobFormFields}
      addModalTitle={"Add Loan Application"}
      columns={columns}
      dataSource={"loan"}
      editModalTitle="Edit Loan Application"
      api={"loan/"}
    />
  );
}

export default Loan;
