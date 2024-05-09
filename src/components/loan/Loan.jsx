import { Input, Select } from "antd";

import PageUiComponent from "../ui/PageUiComponent";

const dataSource = [
  {
    key: "1",
    borrower: 2000000,
    loanDetails: 32000,
    payable: 2000,
    status: "John Brown",
  },
  {
    key: "2",
    borrower: 4000000,
    loanDetails: 29900,
    payable: 10000,
    status: "Lwanga",
  },
];

const jobFormFields = [
  {
    name: "providerName",
    label: "Borrower:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "country",
    label: "Loan Type:",
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
    name: "numberOffered",
    label: "Loan Plan:",
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
    name: "amount",
    label: "Loan Amount:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "purpose",
    label: "Purpose:",
    rules: [{ required: true, message: "Please enter your name" }],
    inputComponent: <Input.TextArea className="w-full" />,
  },
];

function Loan() {
  const columns = [
    {
      title: "Borrower",
      dataIndex: "borrower",
      key: "borrower",
    },

    {
      title: "Loan Details",
      dataIndex: "loanDetails",
      key: "loanDetails",
    },
    {
      title: "Next Payable Details",
      dataIndex: "payable",
      key: "payable",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  return (
    <PageUiComponent
      headerTitle={"Loans"}
      placeholder={"Search Loan"}
      modalFields={jobFormFields}
      addModalTitle={"Add Loan Application"}
      columns={columns}
      dataSource={dataSource}
      editModalTitle="Edit Loan Application"
    />
  );
}

export default Loan;
