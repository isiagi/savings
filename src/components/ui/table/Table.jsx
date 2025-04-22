import PropTypes from "prop-types";

import { Spin, Table, Typography } from "antd";
import { useParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import { useEffect } from "react";
import useCreate from "../../../global/DataState";
// import { useNavigate } from "react-router-dom";

const { Text } = Typography;

function TableComponent({ dataSource, columns, loading, wagubumbuziAmounts }) {
  // const navigate = useNavigate();
  const { key } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [res, , refetchData] = useFetchData("auth/totals");
  const dataCreated = useCreate((state) => state.dataCreated);
  const tableData = useCreate((state) => state.tableData);

  // console.log(tableData, "table data");

  const calculateTotal = (tableData, remain = false) => {
    if (!tableData || tableData.length === 0) return 0;

    const hasAmount = tableData.some((item) =>
      Object.prototype.hasOwnProperty.call(item, "amount")
    );

    const hasRemainingAmount = tableData.some((item) =>
      Object.prototype.hasOwnProperty.call(item, "remaining_amount")
    );

    if (remain && hasRemainingAmount) {
      return tableData.reduce((acc, item) => {
        const remainingAmountValue = parseFloat(
          item.remaining_amount.replace(/[^\d.-]/g, "")
        );
        return acc + (remainingAmountValue || 0);
      }, 0);
    }

    if (hasAmount) {
      return tableData.reduce((acc, item) => {
        // Assuming item.amount is in the format "UGX 100,000"
        const amountValue = parseFloat(item.amount.replace(/[^\d.-]/g, ""));
        return acc + (amountValue || 0);
      }, 0);
    } else {
      return tableData.length;
    }
  };

  const total = calculateTotal(dataSource);

  const remainingTotal = calculateTotal(dataSource, true);

  const formattedTotal =
    typeof total === "number" &&
    dataSource.some((item) =>
      Object.prototype.hasOwnProperty.call(item, "amount")
    )
      ? new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "UGX",
          currencySign: "standard",
        }).format(total)
      : total;

  const formattedData = dataSource.map((item) => {
    if (key === "3" || (key === "4" && typeof item.member_id === "object")) {
      return {
        ...item,
        member_id: item.member_id.username,
        member_name: `${item.member_id.first_name} ${item.member_id.last_name}`,
      };
    }

    if (key === "5") {
      return {
        ...item,
        membership_id: item.membership_id.username,
        name: `${item.membership_id.first_name} ${item.membership_id.last_name}`,
      };
    }

    return item; // return the item as is for other cases
  });

  // console.log(formattedData, "formattedData");

  return (
    <Table
      // onRow={() => {
      //   return {
      //     onClick: ({
      //   title: "Loan Type",
      //   dataIndex: "type",
      //   key: "type",
      // },) => navigate("/detail/2"), // click row
      //   };
      // }}
      summary={() => {
        let tableTotal = 0;

        if (res.length === 0) {
          return (
            <Table.Summary.Row>
              <Table.Summary.Cell>Total</Table.Summary.Cell>
              <Table.Summary.Cell colSpan={1}>
                <Text className="text-blue-500 font-semibold text-base">
                  <Spin />
                </Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          );
        }

        switch (key) {
          case "null":
            tableTotal = 0;
            break;
          case "2":
            tableTotal = res && res.totalMembers; //members
            break;
          case "3":
            tableTotal = res && res?.total_saving.total_saving; // saving
            break;
          case "4":
            tableTotal = res && res?.total_laon.total_laon; // loan
            break;
          case "5":
            tableTotal = res && res?.total_borrower; //borrowers
            break;
          case "9":
            tableTotal = res && res?.total_payment.total_payment; //payments
            break;
          case "10":
            tableTotal = res && res?.total_wagubumbuzi.total_Wagubumbuzi; //wagui
            break;
          default:
            return (tableTotal = 0);
        }
        return (
          <Table.Summary.Row>
            <Table.Summary.Cell className="text-[#9E9A23] font-semibold">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell colSpan={1}>
              <Text className="text-[#569E23] font-medium text-base">
                {formattedTotal}
              </Text>
              {remainingTotal !== 0 && key == "4" && (
                <Text className="text-[#9E9A23] font-medium text-base">
                  {" "}
                  ({remainingTotal})
                </Text>
              )}
            </Table.Summary.Cell>

            {key == "10" && (
              <>
                <Table.Summary.Cell className="text-[#9E9A23] font-semibold">
                  Wagubumzi Available
                </Table.Summary.Cell>
                <Table.Summary.Cell colSpan={1}>
                  {wagubumbuziAmounts.amountReduced.toLocaleString("en-US", {
                    style: "currency",
                    currency: "UGX",
                  })}

                  {/* {remainingTotal !== 0 && key == "4" && (
                <Text className="text-[#9E9A23] font-medium text-base">
                  {" "}
                  ({remainingTotal})
                </Text>
              )} */}
                  {/* if local storage has wagubumbuzi_amount then show else 0 */}

                  {
                    <Text className="text-[#9E9A23] font-medium text-base">
                      {" "}
                      {wagubumbuziAmounts.totalAfterReduction.toLocaleString(
                        "en-US",
                        {
                          style: "currency",
                          currency: "UGX",
                        }
                      ) || 0}
                    </Text>
                  }
                </Table.Summary.Cell>
              </>
            )}
          </Table.Summary.Row>
        );
      }}
      scroll={{ x: 400, y: 300 }}
      dataSource={formattedData}
      columns={columns}
      pagination={{ position: ["topRight"], pageSize: 5 }}
      rowClassName={"green"}
      loading={loading}
    />
  );
}

TableComponent.propTypes = {
  dataSource: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  loading: PropTypes.array.isRequired,
};

export default TableComponent;
