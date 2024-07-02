/* eslint-disable react/prop-types */
import { useEffect } from "react";
import useStore from "../../global/GlobalStates";
import HeaderBanner from "./HeaderBanner/HeaderBanner";
import ModalComponent from "./modal/Modal";
import TableUiComponent from "./TableUiComponent";
import fetchData from "../../utils/fetchData";
import useCreate from "../../global/DataState";

function PageUiComponent({
  headerTitle,
  placeholder,
  modalFields,
  addModalTitle,
  columns,
  dataSource,
  editModalTitle,
  api,
}) {
  const openAddModal = useStore((state) => state.openAddModal);
  const dataLoading = useCreate((state) => state.setDataLoading);
  const setRawData = useCreate((state) => state.setRawData);
  const setDataNoLoading = useCreate((state) => state.setDataNoLoading);

  const fetchDataFx = async () => {
    try {
      dataLoading();
      setRawData([]);
      const data = await fetchData(dataSource);
      setRawData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setDataNoLoading();
    }
  };

  useEffect(() => {
    fetchDataFx();
  }, []);

  return (
    <div>
      <HeaderBanner
        title={headerTitle}
        placeholder={placeholder}
        openAddModal={openAddModal}
      />

      <ModalComponent api={api} data={modalFields} title={addModalTitle} />

      <TableUiComponent
        configs={columns}
        fetchUrl={dataSource}
        data={modalFields}
        titlez={editModalTitle}
        api={api}
      />
    </div>
  );
}

export default PageUiComponent;
