import { Input, Select, Space } from "antd";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import TableComponent from "../table/Table";
import ModalComponent from "../modal/Modal";
import useStore from "../../global/GlobalStates";

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
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
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
  const openAddModal = useStore((state) => state.openAddModal);

  return (
    <div>
      <HeaderBanner
        title="Loan"
        placeholder="Search Loan"
        openAddModal={openAddModal}
      />

      <ModalComponent data={jobFormFields} title="Add Loan Application" />

      <TableComponent dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default Loan;
