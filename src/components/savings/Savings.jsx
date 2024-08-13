import PageUiComponent from "../ui/PageUiComponent";
import formFields from "../../utils/formFields";

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

function Savings() {
  return (
    <PageUiComponent
      headerTitle={"Savings"}
      placeholder={"Enter Membership_id"}
      modalFields={formFields.savingFormFields}
      addModalTitle={"Add Savings"}
      columns={columns}
      dataSource={"saving"}
      editModalTitle="Edit Saving"
      api={"saving/"}
    />
  );
}

export default Savings;
