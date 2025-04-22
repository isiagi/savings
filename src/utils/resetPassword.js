import instance from "../components/api/axios/axios";

// Post Amount
export const resetPassword = async (amount) => {
  const response = await instance.post("auth/forgot_password/", {
    membership: amount,
  });
  return response.data;
};
