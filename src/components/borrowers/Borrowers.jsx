import { Select } from "antd";

import PageUiComponent from "../ui/PageUiComponent";

const dataSource = [
  {
    key: "1",
    membershipId: 2000000,

    name: "John Brown",
  },
  {
    key: "2",
    membershipId: 4000000,

    name: "Lwanga",
  },
];

const columns = [
  {
    title: "Membership ID",
    dataIndex: "membershipId",
    key: "membershipId",
  },

  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
];

const jobFormFields = [
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

function Borrowers() {
  return (
    <PageUiComponent
      headerTitle={"Borrowers"}
      placeholder={"Search Borrower"}
      modalFields={jobFormFields}
      addModalTitle={"Add Borrower"}
      columns={columns}
      dataSource={dataSource}
      editModalTitle="Edit Borrower"
    />
  );
}

export default Borrowers;
