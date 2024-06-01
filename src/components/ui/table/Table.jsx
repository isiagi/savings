import PropTypes from "prop-types";

import { Table, Typography } from "antd";
// import { useNavigate } from "react-router-dom";

const { Text } = Typography;

function TableComponent({ dataSource, columns }) {
  // const navigate = useNavigate();

  return (
    <Table
      // onRow={() => {
      //   return {
      //     onClick: () => navigate("/detail/2"), // click row
      //   };
      // }}
      summary={() => (
        <Table.Summary.Row>
          <Table.Summary.Cell>Balance</Table.Summary.Cell>
          <Table.Summary.Cell colSpan={1}>
            <Text className="text-blue-500 font-semibold text-base">
              1200000
            </Text>
          </Table.Summary.Cell>
        </Table.Summary.Row>
      )}
      scroll={{ x: 400 }}
      dataSource={dataSource}
      columns={columns}
    />
  );
}

TableComponent.propTypes = {
  dataSource: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};

export default TableComponent;
