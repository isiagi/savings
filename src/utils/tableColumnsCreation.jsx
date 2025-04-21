import { Popconfirm, Space } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
import { toggleStatus } from "./toggleStatus";

// interface ColumnConfig {
//   title: string;
//   dataIndex: any;
//   key: string;
//   onClick?: (record: any) => void;
//   render?: (text: any, record: any) => React.ReactNode;
// }

// interface CreateColumnsProps {
//   configs: ColumnConfig[];
//   handleRowClick: (record: any) => void;
//   handleDelete: (recordId: string) => void;
//   id: any;
//   basePath: any;
//   password?: any;
// }

export function createColumns(
  configs,
  handleRowClick,
  handleDelete,
  key,
  handleOpenModal
) {
  // console.log("configs", configs);

  const handleToggle = async (id) => {
    try {
      console.log("id", id);
      await toggleStatus(id);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  const columns = configs.map((config) => ({
    ...config,
    onCell: (record) => ({
      onClick: () =>
        config.onClick ? config.onClick(record.id) : handleOpenModal(record),
    }),
    render: config.render ? config.render : (text) => <a>{text}</a>,
  }));

  columns.push({
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        {/* {password && (
          <Link to={`${basePath}/${record.id}`}>
            <div className="text-green-400 hover:text-green-600 flex items-center gap-1 cursor-pointer">
              <KeyOutlined />
            </div>
          </Link>
        )} */}

        {key == 20 ? (
          // <h1 onClick={() => handleToggle(record.id)}>Activate</h1>
          <Popconfirm
            placement="rightTop"
            title="Activate"
            description="Are you sure to activate this loan?"
            onConfirm={() => handleToggle(record.id)}
            onCancel={""}
            okText="Yes"
            cancelText="No"
          >
            <div className="text-green-400 hover:text-green-600 flex items-center gap-1 cursor-pointer">
              <CheckSquareOutlined />
            </div>
          </Popconfirm>
        ) : (
          <div
            onClick={() => handleRowClick(record.id)}
            className="text-green-400 hover:text-green-600 flex items-center gap-1 cursor-pointer"
          >
            <EditOutlined />
          </div>
        )}

        <div
          className="text-[#d1890dbe] hover:text-[#D18A0D] flex items-center gap-1 cursor-pointer"
          // onClick={() => handleDelete(record.id)}
        >
          <Popconfirm
            placement="rightTop"
            title="Delete"
            description="Are you sure to delete this item?"
            onConfirm={() => handleDelete(record.id)}
            onCancel={""}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined />
          </Popconfirm>
        </div>
      </Space>
    ),
  });

  return columns;
}
