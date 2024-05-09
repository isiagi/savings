import { Input } from "antd";

import PageUiComponent from "../ui/PageUiComponent";

const dataSource = [
  {
    key: "1",
    saving: 2000000,
    loan: 32000,
    interest: 2000,
  },
  {
    key: "2",
    saving: 4000000,
    loan: 29900,
    interest: 10000,
  },
];

const agentFormFields = [
  {
    name: "companyName",
    label: "Full Name:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "agentNames",
    label: "Contact:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "phoneNumber1",
    label: "Address:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "phoneNumber2",
    label: "Member ID:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "email",
    label: "Photo:",
    rules: [
      { required: true, message: "Please enter your email" },
      { type: "email", message: "Please enter a valid email" },
    ],
    inputComponent: <Input type="email" />,
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
      title: "Active Loan",
      dataIndex: "loan",
      key: "loan",
    },
    {
      title: "Last Saving",
      dataIndex: "interest",
      key: "interest",
    },
  ];

  return (
    <PageUiComponent
      headerTitle={"Members"}
      placeholder={"Search Member"}
      modalFields={agentFormFields}
      addModalTitle={"Add Member"}
      columns={columns}
      dataSource={dataSource}
      editModalTitle="Edit Member"
    />
  );
}

export default UserComponent;
