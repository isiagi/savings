import { Input, Select } from "antd";
import TableComponent from "../ui/table/Table";
import EditModalComponent from "../ui/modal/EditModal";

const agentFormFields = [
  {
    name: "fullName",
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
    label: "Place of residence:",
    rules: [{ required: true, message: "Please enter your name" }],
  },
  {
    name: "phoneNumber2",
    label: "Member ID:",
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

function Users() {
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
    <div className="h-[450px]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1>Samson Lwanga</h1>
          <h3>Contact: 995876544567</h3>
          <h3>Address: Kira</h3>
          <h3>Membership No.: ADA / 001 / 2024</h3>
        </div>

        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="helo"
          className="w-[150px] h-[100px] object-cover"
        />
      </div>
      <EditModalComponent data={agentFormFields} title={"Edit User"} />
      <TableComponent dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default Users;
