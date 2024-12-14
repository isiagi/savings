import instance from "../components/api/axios/axios";

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Token ${token}` : "";
  return config;
});

// Post Amount
export const postAmount = async (amount) => {
  try {
    const response = await instance.post("wagubumbuzi/reduce/", {
      amount: amount,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};