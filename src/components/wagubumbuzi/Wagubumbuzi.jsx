import { useState, useMemo } from "react";
import { Input } from "antd";
import TableComponent from "../ui/table/Table";
import useFetchData from "../../hooks/useFetchData";
import fetchSearchData from "../../utils/fetchSearchData";

const { Search } = Input;

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
  const [searchLoading, setSearchLoading] = useState(false);
  const [filteredData, setFilteredData] = useState(null);

  const [tableData, loading] = useFetchData("wagubumbuzi");

  const wagubumbuziData = useMemo(() => {
    if (!tableData) return [];
    return tableData.map((item) => {
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
    });
  }, [tableData]);

  const onSearch = async (value) => {
    setSearchLoading(true);
    try {
      const data = await fetchSearchData(`wagubumbuzi?username=${value}`);
      const transformedData = data.map((item) => {
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
      });
      setFilteredData(transformedData);
    } catch (error) {
      console.error("Search error:", error);
    }
    setSearchLoading(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap">
        <h1 className="font-medium text-xl text-[#569E23]">{"Wagubumbuzi"}</h1>
        <div>
          <Search
            placeholder="Search"
            onSearch={onSearch}
            loading={searchLoading}
            style={{ width: 200 }}
          />
        </div>
      </div>
      <TableComponent
        dataSource={filteredData || wagubumbuziData}
        columns={columns}
        loading={loading || searchLoading}
      />
    </div>
  );
}

export default Wagubumbuzi;
