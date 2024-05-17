import { Input, Select } from "antd";

import PageUiComponent from "../ui/PageUiComponent";

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

const agentFormFields = [
  {
    name: "fullName",
    label: "Full Name:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "contact",
    label: "Contact:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "placeOfResidence",
    label: "Place of residence:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "membershipId",
    label: "Membership ID:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "occupation",
    label: "Occupation:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "photo",
    label: "Photo:",
    rules: [
      { required: true, message: "Please enter your email" },
      { type: "email", message: "Please enter a valid email" },
    ],
    inputComponent: <Input type="email" />,
  },
  {
    name: "gender",
    label: "Gender:",
    rules: [{ required: true, message: "Please enter your Gender" }],
    inputComponent: (
      <Select
        defaultValue="Select Gender"
        className="w-full"
        allowClear
        options={[
          { value: "female", label: "Female" },
          { value: "male", label: "Male" },
        ]}
      />
    ),
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
      modalFields={agentFormFields}
      addModalTitle={"Add Member"}
      columns={columns}
      dataSource={dataSource}
      editModalTitle="Edit Member"
    />
  );
}

export default UserComponent;
