import PageUiComponent from "../ui/PageUiComponent";
import formFields from "../../utils/formFields";
import { useNavigate } from "react-router-dom";
// import { Alert } from "antd";

function UserComponent() {
  const navigate = useNavigate();

  const columns = [
    // {
    //   title: "Image",
    //   dataIndex: "image",
    //   key: "image",
    //   render: () => (
    //     <img
    //       src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    //       alt="helo"
    //       className="w-[100px] h-[50px] object-cover"
    //     />
    //   ),
    //   onClick: (id) => navigate(`/home/detail/2/${id}`),
    // },

    {
      title: "Membership ID:",
      dataIndex: "username",
      key: "username",
      onClick: (id) => navigate(`/home/detail/2/${id}`),
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
      onClick: (id) => navigate(`/home/detail/2/${id}`),
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
      onClick: (id) => navigate(`/home/detail/2/${id}`),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <>
      {/* <Alert
        message="Members Create Profile from Mobile App"
        type="info"
        className="w-fit"
      /> */}
      <PageUiComponent
        headerTitle={"Members"}
        placeholder={"Enter Membership_id"}
        modalFields={formFields.userFormFielders}
        addModalTitle={"Add Member"}
        columns={columns}
        dataSource={"auth/users"}
        editModalTitle="Edit Member"
        api={"auth/signup/"}
      />
    </>
  );
}

export default UserComponent;
