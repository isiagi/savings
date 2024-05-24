import useStore from "../../global/GlobalStates";
import { createColumns } from "../../utils/tableColumnsCreation";
import EditModalComponent from "./modal/EditModal";
import TableComponent from "./table/Table";
import useFetchData from "../../hooks/useFetchData";
import deleteData from "../api/api_routes/deleteData";
import useCreateData from "../../hooks/useCreateData";
import getById from "../api/api_routes/getById";
import { useState } from "react";
import { useParams } from "react-router-dom";

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
  api,
}) {
  const openEditModal = useStore((state) => state.openEditModal);

  const [res, loading, refetchData] = useFetchData(fetchUrl);
  const obj = useParams();

  const [resData, setResData] = useState();
  const [objId, setObjId] = useState();

  const handleDelete = async (id) => {
    // console.log("id", fetchUrl);
    console.log("deleted", id, obj, api);
    if (obj.key == 2) {
      await deleteData("auth", id);

      await refetchData();
    }

    await deleteData(fetchUrl, id);

    await refetchData();
  };

  const handleRowClick = async (id) => {
    const data =
      obj.key != 2 ? await getById(fetchUrl, id) : await getById("auth", id);

    setResData(data.data);
    setObjId(id);

    openEditModal();
  };

  const { key } = useParams();

  const columns = createColumns(configs, handleRowClick, handleDelete, key);

  console.log(fetchUrl);
  console.log("res", res);

  return (
    <>
      <TableComponent
        columns={columns}
        dataSource={res.users ? res.users : res}
      />
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
