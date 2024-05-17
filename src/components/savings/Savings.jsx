import { DatePicker } from "antd";

import PageUiComponent from "../ui/PageUiComponent";

const columns = [
  {
    title: "Membership ID",
    dataIndex: "member_id",
    key: "member_id",
  },

  {
    title: "Member's Name",
    dataIndex: "member_name",
    key: "member_name",
  },
  {
    title: "Amount:",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Date Of Deposit:",
    dataIndex: "date_of_payment",
    key: "date_of_payment",
  },
];

const jobFormFields = [
  {
    name: "membershipId",
    label: "Membership ID:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "memberName",
    label: "Member's Name:",
    rules: [{ required: true, message: "Please enter your Member's Name" }],
  },
  {
    name: "amount",
    label: "Amount:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "dateOfDesposit",
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
      dataSource={"saving"}
      editModalTitle="Edit Saving"
    />
  );
}

export default Savings;
