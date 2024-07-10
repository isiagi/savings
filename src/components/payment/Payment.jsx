import formFields from "../../utils/formFields";
import PageUiComponent from "../ui/PageUiComponent";

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
    dataIndex: "penality",
    key: "penality",
  },
];

function Payment() {
  return (
    <PageUiComponent
      headerTitle={"Payment"}
      placeholder={"Search Payment"}
      modalFields={formFields.paymentFormFields}
      addModalTitle={"Add Payment"}
      columns={columns}
      dataSource={"payment"}
      editModalTitle="Edit Payment"
      api={"payment/"}
    />
  );
}

export default Payment;
