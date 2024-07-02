import instance from "../components/api/axios/axios";

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Token ${token}` : "";
  return config;
});

async function fetchSearchData(path) {
  try {
    const response = await instance.get(path);

    return response.data;
  } catch (error) {
    console.log(error.response?.data?.detail);
  }
}

export default fetchSearchData;
