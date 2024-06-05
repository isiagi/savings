import instance from "../components/api/axios/axios";

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  console.log("token", token);
  config.headers.Authorization = token ? `Token ${token}` : "";
  return config;
});

export default instance;
