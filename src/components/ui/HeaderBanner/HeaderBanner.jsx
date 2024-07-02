import PropTypes from "prop-types";

import { Button, Input } from "antd";
import { useState } from "react";
import fetchSearchData from "../../../utils/fetchSearchData";
import useCreate from "../../../global/DataState";

const { Search } = Input;

function HeaderBanner({ title, placeholder, openAddModal }) {
  const [search, setSearch] = useState("");
  const { dataLoading, setRawData, setDataNoLoading } = useCreate((state) => {
    return {
      dataLoading: state.setDataLoading,
      setRawData: state.setRawData,
      setDataNoLoading: state.setDataNoLoading,
    };
  });

  const onSearch = async (value) => {
    setSearch(value);

    try {
      dataLoading();
      setRawData([]);
      const data = await fetchSearchData(`saving?member_name=${value}`);
      setRawData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setDataNoLoading();
    }
  };

  return (
    <div className="flex items-center justify-between flex-wrap">
      <h1 className="font-medium text-xl text-[#569E23]">{title}</h1>
      <div>
        <Search
          placeholder={placeholder}
          // value={search}
          onSearch={onSearch}
          style={{
            width: 200,
            marginRight: 8, // Adjust spacing between Search and Button
          }}
          // onPressEnter={onSearch} // If you want search on Enter key press
        />
        {/* <Button className="bg-[#9E9A23] text-white hover:text-[#D18A0D] outline-none">
          Search
        </Button> */}
      </div>
      <Button
        className="bg-[#9E9A23] text-white hover:text-[#D18A0D] outline-none"
        onClick={openAddModal}
      >
        Add {title}
      </Button>
    </div>
  );
}

HeaderBanner.propTypes = {
  openAddModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default HeaderBanner;
