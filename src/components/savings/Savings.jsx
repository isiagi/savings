import { DatePicker } from "antd";

import PageUiComponent from "../ui/PageUiComponent";

const dataSource = [
  {
    key: "1",
    saving: 2000000,
    loan: 32000,
    interest: 2000,
    name: "John Brown",
  },
  {
    key: "2",
    saving: 4000000,
    loan: 29900,
    interest: 10000,
    name: "Lwanga",
  },
];

const columns = [
  {
    title: "Member ID",
    dataIndex: "Member ID",
    key: "name",
  },

  {
    title: "Member Name",
    dataIndex: "loan",
    key: "loan",
  },
  {
    title: "Savings Account Number:",
    dataIndex: "interest",
    key: "interest",
  },
  {
    title: "Current Balance:",
    dataIndex: "interest",
    key: "interest",
  },
  {
    title: "Last Deposit Date",
    dataIndex: "interest",
    key: "interest",
  },
];

const jobFormFields = [
  {
    name: "providerName",
    label: "Member ID:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "country",
    label: "Member Name:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "numberOffered",
    label: "Savings Account Number:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "amount",
    label: "Amount:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "date",
    label: "Date Of Deposit:",
    rules: [{ required: true, message: "Please enter your name" }],
    inputComponent: <DatePicker className="w-full" />,
  },
];

function Savings() {
  return (
    <PageUiComponent
      headerTitle={"Savings"}
      placeholder={"Search Savings"}
      modalFields={jobFormFields}
      addModalTitle={"Add Savings"}
      columns={columns}
      dataSource={dataSource}
      editModalTitle="Edit Saving"
    />
  );
}

export default Savings;
