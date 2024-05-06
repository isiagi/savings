import { Space } from "antd";
import TableComponent from "../table/Table";

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
    title: "Member ID",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "Member Name",
    dataIndex: "loan",
    key: "loan",
  },
  {
    title: "Date Of Payment",
    dataIndex: "interest",
    key: "interest",
  },
  {
    title: "Month Paid",
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

function Wagubumbuzi() {
  return (
    <div>
      <TableComponent dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default Wagubumbuzi;
