import PropTypes from "prop-types";

import { Spin, Table, Typography } from "antd";
import { useParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const { Text } = Typography;

function TableComponent({ dataSource, columns, loading }) {
  // const navigate = useNavigate();
  const { key } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [res, _, refetchData] = useFetchData("auth/totals");

  console.log("obj", key);

  // if (res.length === 0)
  //   return (
  //     <Spin tip="Loading" size="large">
  //       Table Loading...
  //     </Spin>
  //   );
  useEffect(() => {
    refetchData();
  }, [res]);

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
            tableTotal = res && res?.total_loans; //borrowers
            break;
          case "9":
            tableTotal = res && res?.total_payment.total_payment; //payments
            break;
          case "10":
            tableTotal = res && res?.total_wagubumbuzi.total_Wagubumbuzi; //wagui
            break;
          default:
            tableTotal = 0;
            break;
        }
        return (
          <Table.Summary.Row>
            <Table.Summary.Cell className="text-[#9E9A23] font-semibold">
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell colSpan={1}>
              <Text className="text-[#569E23] font-medium text-base">
                {!tableTotal ? 0 : tableTotal}
              </Text>
            </Table.Summary.Cell>
          </Table.Summary.Row>
        );
      }}
      scroll={{ x: 400 }}
      dataSource={dataSource}
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
