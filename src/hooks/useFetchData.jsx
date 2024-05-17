import { useEffect, useState } from "react";
import instance from "../components/api/axios/axios";

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

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await instance.get(`${path}`);

      console.log("res", response.data);

      setRes(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetchData = async () => {
    await fetchData(); // Call fetchData again to refetch data
  };

  return [res, loading, refetchData];
}

export default useFetchData;
