import PageUiComponent from "../ui/PageUiComponent";
import formFields from "../../utils/formFields";

function Loan() {
  const columns = [
    {
      title: "Name",
      dataIndex: "member_name",
      key: "member_name",
      render: (member_name, record) => {
        // Try to use member_name if available
        if (member_name) return member_name;

        // Otherwise try to construct name from member_id object
        const member = record.member_id;
        if (typeof member === "object" && member !== null) {
          return member.first_name && member.last_name
            ? `${member.first_name} ${member.last_name}`
            : member.username || "N/A";
        }

        return "N/A";
      },
    },

    {
      title: "Membership Id",
      dataIndex: "member_id",
      key: "member_id",
      render: (member_id) => {
        if (member_id === null || member_id === undefined) return "N/A";
        if (typeof member_id === "object") {
          return (
            member_id.username ||
            (member_id.first_name && member_id.last_name
              ? `${member_id.first_name} ${member_id.last_name}`
              : "N/A")
          );
        }
        return String(member_id);
      },
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
      title: "Loan Cost",
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
      dataSource={"loan/?archived=true"}
      editModalTitle="Edit Loan Application"
      api={"loan/"}
    />
  );
}

export default Loan;
