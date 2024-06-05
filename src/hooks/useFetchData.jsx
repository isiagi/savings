import { useEffect, useState } from "react";
import instance from "../components/api/axios/axios";
import useCreate from "../global/DataState";

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  console.log("token", token);
  config.headers.Authorization = token ? `Token ${token}` : "";
  return config;
});

function useFetchData(path) {
  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState(false);

  const dataCreated = useCreate((state) => state.dataCreated);
  const setNoCreated = useCreate((state) => state.setNoCreated);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await instance.get(`${path}`);

      console.log("res", response.data);

      setRes(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data.detail);
      if (error.response.data.detail === "Invalid token.") {
        localStorage.removeItem("token");
        setLoading(false);
      }
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetchData = async () => {
    await fetchData(); // Call fetchData again to refetch data
  };

  dataCreated && refetchData();
  dataCreated && setNoCreated();

  return [res, loading, refetchData];
}

export default useFetchData;
