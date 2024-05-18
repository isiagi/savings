import PageUiComponent from "../ui/PageUiComponent";
import formFields from "../../utils/formFields";

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

function Borrowers() {
  return (
    <PageUiComponent
      headerTitle={"Borrowers"}
      placeholder={"Search Borrower"}
      modalFields={formFields.borrowerFormFields}
      addModalTitle={"Add Borrower"}
      columns={columns}
      dataSource={dataSource}
      editModalTitle="Edit Borrower"
    />
  );
}

export default Borrowers;
