import instance from "../axios/axios";

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Token ${token}` : "";
  return config;
});

async function editData(path, data) {
  return await instance.patch(`${path}`, data);
}

export default editData;
