import { Select } from "antd";
import { useEffect, useState } from "react";
import instance from "../components/api/axios/axios";

// eslint-disable-next-line react/prop-types
function SelectOptions({ handleChange, path }) {
  const [selectData, setSelectData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOptions();
  }, []);

  const fetchOptions = async () => {
    try {
      setLoading(true);
      const response = await instance.get(path);
      // console.log(response);
      setSelectData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Select
      defaultValue={"Select from options"}
      loading={loading}
      onChange={handleChange}
    >
      {selectData &&
        selectData.map((option, i) => (
          <Select.Option key={i} value={option}>
            {option}
          </Select.Option>
        ))}
    </Select>
  );
}

export default SelectOptions;
