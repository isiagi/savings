import { Space } from "antd";
import TableComponent from "../table/Table";

const dataSource = [
  {
    key: "1",
    saving: 2000000,
    loan: 32000,
    interest: 2000,
    wagubumbuzi: "paid",
  },
  {
    key: "2",
    saving: 4000000,
    loan: 29900,
    interest: 10000,
    wagubumbuzi: "paid",
  },
];

const columns = [
  {
    title: "Saving",
    dataIndex: "saving",
    key: "saving",
  },
  {
    title: "Wagubumbuzi",
    dataIndex: "wagubumbuzi",
    key: "wagubumbuzi",
  },
  {
    title: "Loan",
    dataIndex: "loan",
    key: "loan",
  },
  {
    title: "Interest",
    dataIndex: "interest",
    key: "interest",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Edit</a>
      </Space>
    ),
  },
];

function Users() {
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
      <TableComponent dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default Users;
