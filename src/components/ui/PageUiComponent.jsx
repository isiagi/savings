/* eslint-disable react/prop-types */
import useStore from "../../global/GlobalStates";
import HeaderBanner from "./HeaderBanner/HeaderBanner";
import ModalComponent from "./modal/Modal";
import TableUiComponent from "./TableUiComponent";

function PageUiComponent({
  headerTitle,
  placeholder,
  modalFields,
  addModalTitle,
  columns,
  dataSource,
  editModalTitle,
}) {
  const openAddModal = useStore((state) => state.openAddModal);

  return (
    <div>
      <HeaderBanner
        title={headerTitle}
        placeholder={placeholder}
        openAddModal={openAddModal}
      />

      <ModalComponent data={modalFields} title={addModalTitle} />

      <TableUiComponent
        configs={columns}
        fetchUrl={dataSource}
        data={modalFields}
        titlez={editModalTitle}
      />
    </div>
  );
}

export default PageUiComponent;
