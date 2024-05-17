import { Space } from "antd";
import TableComponent from "../ui/table/Table";
import useFetchData from "../../hooks/useFetchData";

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
    dataIndex: "date_created",
    key: "date_created",
  },
  {
    title: "Month Paid",
    dataIndex: "amount",
    key: "amount",
  },
];

function Wagubumbuzi() {
  const tableData = useFetchData("wagubumbuzi");
  return (
    <div>
      <TableComponent dataSource={tableData[0]} columns={columns} />
    </div>
  );
}

export default Wagubumbuzi;
