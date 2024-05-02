import PropTypes from "prop-types";

import { Table } from "antd";
import { useNavigate } from "react-router-dom";

function TableComponent({ dataSource, columns }) {
  const navigate = useNavigate();

  return (
    <Table
      onRow={() => {
        return {
          onClick: () => navigate("/detail/2"), // click row
        };
      }}
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
