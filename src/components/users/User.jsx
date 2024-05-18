import PageUiComponent from "../ui/PageUiComponent";
import formFields from "../../utils/formFields";

const dataSource = [
  {
    key: "1",
    fullName: 2000000,
    placeOfResidence: 32000,
    occupation: 2000,
  },
  {
    key: "2",
    fullName: 4000000,
    placeOfResidence: 29900,
    occupation: 10000,
  },
];

function UserComponent() {
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: () => (
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="helo"
          className="w-[100px] h-[50px] object-cover"
        />
      ),
    },

    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Place Of Residence",
      dataIndex: "placeOfResidence",
      key: "placeOfResidence",
    },
    {
      title: "Occupation",
      dataIndex: "occupation",
      key: "occupation",
    },
  ];

  return (
    <PageUiComponent
      headerTitle={"Members"}
      placeholder={"Search Member"}
      modalFields={formFields.userFormFields}
      addModalTitle={"Add Member"}
      columns={columns}
      dataSource={dataSource}
      editModalTitle="Edit Member"
    />
  );
}

export default UserComponent;
