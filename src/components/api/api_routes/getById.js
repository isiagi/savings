import instance from "../axios/axios";

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Token ${token}` : "";
  return config;
});

async function getById(path, id) {
  return await instance.get(`${path}/${id}`);
}

export default getById;
