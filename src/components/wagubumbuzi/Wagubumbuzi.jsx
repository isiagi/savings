import TableComponent from "../ui/table/Table";
import useFetchData from "../../hooks/useFetchData";

const columns = [
  {
    title: "Member ID",
    dataIndex: "username",
    key: "username",
  },

  {
    title: "Member Name",
    dataIndex: "full_name",
    key: "full_name",
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

  console.log(tableData[0]);

  const wagubumbuziDataFx = () => {
    return (
      tableData &&
      tableData[0].map((item) => {
        const date = new Date(item.date_created);

        return {
          id: item.id,
          amount: item.amount,
          date_created: `${date.toLocaleString("default", {
            month: "long",
          })} ${date.getFullYear()}`,
          username: item.user.username,
          full_name: `${item.user.first_name} ${item.user.last_name}`,
        };
      })
    );
  };

  const wagubumbuziData = wagubumbuziDataFx();

  return (
    <div>
      <TableComponent dataSource={wagubumbuziData} columns={columns} />
    </div>
  );
}

export default Wagubumbuzi;
