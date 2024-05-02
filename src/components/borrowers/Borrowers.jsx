import { Select, Space } from "antd";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import TableComponent from "../table/Table";
import ModalComponent from "../modal/Modal";
import useStore from "../../global/GlobalStates";

const dataSource = [
  {
    key: "1",
    saving: 2000000,
    loan: 32000,
    interest: 2000,
    name: "John Brown",
  },
  {
    key: "2",
    saving: 4000000,
    loan: 29900,
    interest: 10000,
    name: "Lwanga",
  },
];

const columns = [
  {
    title: "Borrower",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "Current Loan",
    dataIndex: "loan",
    key: "loan",
  },
  {
    title: "Next Payment Schedule",
    dataIndex: "interest",
    key: "interest",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const jobFormFields = [
  {
    name: "country",
    label: "Member ID:",
    rules: [{ required: true, message: "Please enter your name" }],
    inputComponent: (
      <Select
        defaultValue="Select Status"
        className="w-full"
        allowClear
        options={[
          { value: "AVAILABLE", label: "AVAILABLE" },
          { value: "CONTRACT APPROVAL", label: "CONTRACT APPROVAL" },
          { value: "APPROVAL BY MINISTRY", label: "APPROVAL BY MINISTRY" },
          { value: "TRAVELLED", label: "TRAVELLED" },
        ]}
      />
    ),
  },
];

function Borrowers() {
  const openAddModal = useStore((state) => state.openAddModal);

  return (
    <div>
      <HeaderBanner
        title="Borrowers"
        placeholder="Search Borrower"
        openAddModal={openAddModal}
      />

      <ModalComponent data={jobFormFields} title={"Add Borrower"} />

      <TableComponent dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default Borrowers;
