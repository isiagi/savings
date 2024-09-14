import PageUiComponent from "../ui/PageUiComponent";
import formFields from "../../utils/formFields";

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

    // {
    //   title: "Loan Type",
    //   dataIndex: "type",
    //   key: "type",
    // },

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
      title: "Extra Amount",
      dataIndex: "loan_cost",
      key: "loan_cost",
    },
    // {
    //   title: "Granteers",
    //   dataIndex: "granteers",
    //   key: "granteers",
    // },
  ];

  return (
    <PageUiComponent
      headerTitle={"Loans"}
      placeholder={"Enter Membership_id"}
      modalFields={formFields.loanFormFields}
      addModalTitle={"Add Loan Application"}
      columns={columns}
      dataSource={"loan"}
      editModalTitle="Edit Loan Application"
      api={"loan/"}
    />
  );
}

export default Loan;
