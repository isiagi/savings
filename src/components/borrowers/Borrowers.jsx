import PageUiComponent from "../ui/PageUiComponent";
import formFields from "../../utils/formFields";

const columns = [
  {
    title: "Membership ID",
    dataIndex: "membership_id",
    key: "membership_id",
  },

  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
];

function Borrowers() {
  return (
    <PageUiComponent
      headerTitle={"Borrowers"}
      placeholder={"Search Borrower"}
      modalFields={formFields.borrowFormFielders}
      addModalTitle={"Add Borrower"}
      columns={columns}
      dataSource={"borrower"}
      editModalTitle="Edit Borrower"
      api={"borrower/"}
    />
  );
}

export default Borrowers;
