import PropTypes from "prop-types";

import { Button, Input } from "antd";

const { Search } = Input;

// eslint-disable-next-line react/prop-types
function HeaderBanner({ title, placeholder, openAddModal, onSearch }) {
  return (
    <div className="flex items-center justify-between flex-wrap">
      <h1 className="font-medium text-xl text-[#569E23]">{title}</h1>
      <div>
        <Search
          placeholder={placeholder}
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
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
