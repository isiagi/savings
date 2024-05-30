import useStore from "../../global/GlobalStates";
import { createColumns } from "../../utils/tableColumnsCreation";
import EditModalComponent from "./modal/EditModal";
import TableComponent from "./table/Table";
import useFetchData from "../../hooks/useFetchData";
import deleteData from "../api/api_routes/deleteData";
import getById from "../api/api_routes/getById";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { message } from "antd";
import { format } from "date-fns";

/* eslint-disable react/prop-types */
function TableUiComponent({ configs, fetchUrl, data, titlez, api }) {
  const openEditModal = useStore((state) => state.openEditModal);
  const [messageApi, contextHolder] = message.useMessage();

  // eslint-disable-next-line no-unused-vars
  const [res, loading, refetchData] = useFetchData(fetchUrl);
  const obj = useParams();

  const [resData, setResData] = useState();
  const [objId, setObjId] = useState();

  const handleDelete = async (id) => {
    // console.log("id", fetchUrl);
    console.log("deleted", id, obj, api);
    try {
      if (obj.key == 2) {
        await deleteData("auth", id);
        messageApi.success("Data delete successfully!", 7);
        await refetchData();
      }

      await deleteData(fetchUrl, id);
      messageApi.success("Data delete successfully!", 7);
      await refetchData();
    } catch (error) {
      if (error.response && error.response.data) {
        // Assuming the error response is an object where each key contains an array of error messages
        const errorMessages = error.response.data;
        for (const key in errorMessages) {
          if (errorMessages[key] && errorMessages[key].length > 0) {
            errorMessages[key].forEach((msg) => messageApi.error(msg, 7));
          }
        }
      } else {
        messageApi.error("An unexpected error occurred.", 7);
      }
    }
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
  res.map((items) => {
    // console.log(items);
    for (const key in items) {
      // console.log("key", key);
      if (key.includes("date")) {
        const date = new Date(items[key]);
        const yr = (items[key] = format(date, "yyyy-MM-dd HH:mm:ss"));
        console.log(yr);
      }
    }
  });
  return (
    <>
      {contextHolder}
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
