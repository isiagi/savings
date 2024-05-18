import useStore from "../../global/GlobalStates";
import { createColumns } from "../../utils/tableColumnsCreation";
import EditModalComponent from "./modal/EditModal";
import TableComponent from "./table/Table";
import useFetchData from "../../hooks/useFetchData";
import deleteData from "../api/api_routes/deleteData";
import useCreateData from "../../hooks/useCreateData";
import getById from "../api/api_routes/getById";
import { useState } from "react";

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

  const [res, loading, refetchData] = useFetchData(fetchUrl);

  const [resData, setResData] = useState();
  const [objId, setObjId] = useState();

  const handleDelete = async (id) => {
    // alert("deleted", id);
    // console.log("id", fetchUrl);
    await deleteData(fetchUrl, id);

    await refetchData();
  };

  const handleRowClick = async (id) => {
    alert("edit");
    const data = await getById(fetchUrl, id);

    setResData(data.data);
    setObjId(id);

    openEditModal();
  };

  const columns = createColumns(configs, handleRowClick, handleDelete);

  console.log(fetchUrl);

  return (
    <>
      <TableComponent columns={columns} dataSource={res} />
      <EditModalComponent
        api={fetchUrl}
        initial={resData}
        data={data}
        title={titlez}
        id={objId}
      />
    </>
  );
}

export default TableUiComponent;
