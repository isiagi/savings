import instance from "../components/api/axios/axios";

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Token ${token}` : "";
  return config;
});

async function useCreateData(path, data) {
  return await instance.post(`${path}`, data);
}

export default useCreateData;
