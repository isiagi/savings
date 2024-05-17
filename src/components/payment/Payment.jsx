import PageUiComponent from "../ui/PageUiComponent";

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
];

const jobFormFields = [
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

function Payment() {
  return (
    <PageUiComponent
      headerTitle={"Payment"}
      placeholder={"Search Payment"}
      modalFields={jobFormFields}
      addModalTitle={"Add Payment"}
      columns={columns}
      dataSource={dataSource}
      editModalTitle="Edit Payment"
    />
  );
}

export default Payment;
