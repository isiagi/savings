import instance from "../axios/axios";

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers["Content-Type"] =
    "multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s";
  config.headers.Authorization = token ? `Token ${token}` : "";
  return config;
});

async function editMultiData(path, data) {
  return await instance.patch(`${path}`, data);
}

export default editMultiData;

// const config= {
//   "headers": {
//     "content-type": 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s'
//   }
// }
