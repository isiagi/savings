import { Space } from "antd";
import useStore from "../../global/GlobalStates";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import ModalComponent from "../modal/Modal";
import TableComponent from "../table/Table";

const dataSource = [
  {
    key: "1",
    reference: 2000000,
    payee: 32000,
    amount: 2000,
    penalty: 0.0,
  },
  {
    key: "2",
    reference: 4000000,
    payee: 29900,
    amount: 10000,
    penalty: 0.0,
  },
];

const columns = [
  {
    title: "Loan Reference No.",
    dataIndex: "reference",
    key: "reference",
  },

  {
    title: "Payee",
    dataIndex: "payee",
    key: "payee",
  },
  {
    title: "Amount:",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Penalty:",
    dataIndex: "penalty",
    key: "penalty",
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
    label: "Loan Reference No.:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "country",
    label: "Payee:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "numberOffered",
    label: "Amount:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
];

function Payment() {
  const openAddModal = useStore((state) => state.openAddModal);

  return (
    <div>
      <HeaderBanner
        title="Payment"
        placeholder="Search Payment"
        openAddModal={openAddModal}
      />

      <ModalComponent data={jobFormFields} title={"Add Payment"} />

      <TableComponent dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default Payment;
