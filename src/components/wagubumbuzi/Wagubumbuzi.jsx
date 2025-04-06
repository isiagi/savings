import { useState, useMemo, useEffect } from "react";
import { Button, Input, message } from "antd";
import TableComponent from "../ui/table/Table";
import useFetchData from "../../hooks/useFetchData";
import fetchSearchData from "../../utils/fetchSearchData";
import { getAmount, postAmount } from "../../utils/postAmount";

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
  const [inputAmount, setInputAmount] = useState("");
  const [amountLoading, setAmountLoading] = useState(false);
  const [wagubumbuziAmounts, setWagubumbuziAmounts] = useState({
    totalAfterReduction: 0,
    amountReduced: 0,
  });
  const [fetchingReduction, setFetchingReduction] = useState(false);

  const [tableData, loading, refetchData] = useFetchData("wagubumbuzi");

  // Fetch current reduction data on component mount
  useEffect(() => {
    const fetchCurrentReduction = async () => {
      setFetchingReduction(true);
      try {
        const response = await getAmount(); // Update with your actual endpoint

        setWagubumbuziAmounts({
          totalAfterReduction: response.total_after_reduction,
          amountReduced: response.amount_reduced,
        });

        // Save to localStorage for persistence
        localStorage.setItem(
          "wagubumbuziAmounts",
          JSON.stringify({
            totalAfterReduction: response.data.total_after_reduction,
            amountReduced: response.data.amount_reduced,
          })
        );
      } catch (error) {
        console.error("Error fetching current reduction:", error);

        // Try to retrieve from localStorage as fallback
        const savedAmounts = localStorage.getItem("wagubumbuziAmounts");
        if (savedAmounts) {
          setWagubumbuziAmounts(JSON.parse(savedAmounts));
        }
      } finally {
        setFetchingReduction(false);
      }
    };

    fetchCurrentReduction();
  }, []);

  // Original useEffect for calculating from table data - might not be needed now
  // but keeping for compatibility
  useEffect(() => {
    if (tableData && tableData.length > 0) {
      const totalAmount = tableData.reduce(
        (acc, item) => acc + parseFloat(item.amount),
        0
      );
      // We don't need to calculate amount_reduced from individual records anymore
      // since we're now using the global reduction model
    }
  }, [tableData]);

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
      message.error("Failed to search members");
    }
    setSearchLoading(false);
  };

  const handleInputAmount = async () => {
    if (isNaN(inputAmount) || !inputAmount) {
      message.error("Please enter a valid amount");
      return;
    }

    try {
      setAmountLoading(true);
      const response = await postAmount(inputAmount);
      setAmountLoading(false);

      setInputAmount("");
      setWagubumbuziAmounts({
        totalAfterReduction: response.total_after_reduction,
        amountReduced: response.amount_reduced,
      });

      // set to local storage
      localStorage.setItem(
        "wagubumbuziAmounts",
        JSON.stringify({
          totalAfterReduction: response.total_after_reduction,
          amountReduced: response.amount_reduced,
        })
      );
      await refetchData(); // This will trigger the useEffect to recalculate amounts
      message.success("Amount updated successfully");
    } catch (error) {
      console.error("Error posting amount:", error);
      message.error("Failed to update amount");
    } finally {
      setAmountLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap">
        <h1 className="font-medium text-xl text-[#569E23]">{"Wagubumbuzi"}</h1>
        <div className="flex gap-2">
          <Input
            onChange={(e) => setInputAmount(e.target.value)}
            placeholder="Enter Amount"
            style={{ width: 200 }}
            value={inputAmount}
            type="number"
          />
          <Button
            loading={amountLoading}
            onClick={handleInputAmount}
            type="primary"
          >
            Enter
          </Button>
        </div>
        <div>
          <Search
            placeholder="Enter Membership_id"
            onSearch={onSearch}
            loading={searchLoading}
            style={{ width: 200 }}
          />
        </div>
      </div>
      <TableComponent
        dataSource={filteredData || wagubumbuziData}
        columns={columns}
        loading={loading || searchLoading || fetchingReduction}
        wagubumbuziAmounts={wagubumbuziAmounts}
      />
    </div>
  );
}

export default Wagubumbuzi;
