import useStore from "../../global/GlobalStates";
import { createColumns } from "../../utils/tableColumnsCreation";
import EditModalComponent from "./modal/EditModal";
import TableComponent from "./table/Table";
import useFetchData from "../../hooks/useFetchData";
import deleteData from "../api/api_routes/deleteData";
import getById from "../api/api_routes/getById";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Modal, message } from "antd";
import { format } from "date-fns";
import useCreate from "../../global/DataState";

/* eslint-disable react/prop-types */
function TableUiComponent({ configs, fetchUrl, data, titlez, api }) {
  const openEditModal = useStore((state) => state.openEditModal);
  const { setModalState, setOpenModal, openModal, setCloseModal, modalState } =
    useStore((state) => {
      return {
        setModalState: state.setModalState,
        setOpenModal: state.setOpenModal,
        openModal: state.openModal,
        setCloseModal: state.setCloseModal,
        modalState: state.modalState,
      };
    });
  const [messageApi, contextHolder] = message.useMessage();

  // eslint-disable-next-line no-unused-vars
  const [res, loading, refetchData] = useFetchData(fetchUrl);
  const obj = useParams();

  const [resData, setResData] = useState();
  const [objId, setObjId] = useState();

  const setDataCreated = useCreate((state) => state.setDataCreated);
  const setTableData = useCreate((state) => state.setTableData);

  // console.log(modalState);

  const handleDelete = async (id) => {
    // console.log("id", fetchUrl);
    console.log("deleted", id, obj, api);
    try {
      if (obj.key == 2) {
        await deleteData("auth", id);
        messageApi.success("Data delete successfully!", 7);
        // await refetchData();
        setDataCreated();
      }

      await deleteData(fetchUrl, id);
      messageApi.success("Data delete successfully!", 7);
      // await refetchData();
      setDataCreated();
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

  const handleOpenModal = (record) => {
    setModalState(record);
    setOpenModal();
  };

  const columns = createColumns(
    configs,
    handleRowClick,
    handleDelete,
    key,
    handleOpenModal
  );

  console.log(fetchUrl);
  // console.log("res", res);
  res.map((items) => {
    // console.log(items);
    for (const key in items) {
      // console.log("key", key);
      if (key.includes("date")) {
        const date = new Date(items[key]);
        items[key] = format(date, "yyyy-MM-dd");
        // console.log(yr);
      }

      if (key.includes("amount")) {
        console.log("key", items[key]);
        const formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "UGX",
        });

        let amt = items[key];

        // Log the type and value of amt for debugging
        console.log("Original amount value:", amt, "Type:", typeof amt);

        // Check for null, undefined, empty string
        if (amt === null || amt === undefined || amt === "") {
          console.error("Amount is null, undefined, or empty:", amt);
          items[key] = "Invalid amount"; // Handle the invalid amount as desired
        } else {
          // Remove non-numeric characters (except the decimal point)
          let cleanedAmt = amt.replace(/[^0-9.-]+/g, "");

          // Log the cleaned amount for debugging
          console.log("Cleaned amount value:", cleanedAmt);

          // Attempt to parse float
          let parsedAmt = parseFloat(cleanedAmt);

          // Log the parsed amount for debugging
          console.log("Parsed amount value:", parsedAmt);

          if (isNaN(parsedAmt)) {
            console.error("Parsed amount is NaN:", amt);
            items[key] = "Invalid amount"; // Handle the invalid amount as desired
          } else {
            items[key] = formatter.format(parsedAmt);
          }
        }

        // Log the formatted value for debugging
        console.log("Formatted amount:", items[key]);
      }
    }
  });
  setTableData(res);
  return (
    <>
      {contextHolder}
      <TableComponent
        columns={columns}
        dataSource={res.users ? res.users : res}
        loading={loading}
      />
      <Modal
        onOk={setCloseModal}
        onCancel={setCloseModal}
        open={openModal}
        title="Details"
      >
        {modalState &&
          Object.entries(modalState)
            .filter(
              // eslint-disable-next-line no-unused-vars
              ([item, _]) =>
                item !== "id" && item !== "user" && item !== "user_id"
            )
            .map(([key, value]) => (
              <h3 className="text-base" key={key}>
                {`${key} : `}
                <span className="font-medium">{`${value}`}</span>
              </h3>
            ))}
      </Modal>
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
