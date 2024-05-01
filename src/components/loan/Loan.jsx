import { Space } from "antd";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
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
    title: "Name",
    dataIndex: "name",
    key: "name",
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

function Loan() {
  return (
    <div>
      <HeaderBanner title="Loan" placeholder="Search Loan" />

      <TableComponent dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default Loan;
