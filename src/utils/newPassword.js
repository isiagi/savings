import instance from "../components/api/axios/axios";

// Update password with token
export const newPassword = async (data) => {
  const { encoded_pk, token, ...passwordData } = data;

  const response = await instance.patch(
    `auth/reset_password/${encoded_pk}/${token}/`,
    passwordData
  );
  return response.data;
};
