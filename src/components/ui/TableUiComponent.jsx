import useStore from "../../global/GlobalStates";
import { createColumns } from "../../utils/tableColumnsCreation";
import EditModalComponent from "./modal/EditModal";
import TableComponent from "./table/Table";

/* eslint-disable react/prop-types */
function TableUiComponent({
  configs,
  fetchUrl,
  editUrl,
  createUrl,
  title,
  deleteUrl,
  data,
  titlez,
}) {
  const openEditModal = useStore((state) => state.openEditModal);
  const handleDelete = () => {
    alert("deleted");
  };

  const handleRowClick = () => {
    alert("edit");
    openEditModal();
  };

  const columns = createColumns(configs, handleRowClick, handleDelete);

  return (
    <>
      <TableComponent columns={columns} dataSource={fetchUrl} />
      <EditModalComponent data={data} title={titlez} />
    </>
  );
}

export default TableUiComponent;
