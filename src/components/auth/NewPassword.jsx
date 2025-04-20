import { Form, Input, Button, Typography, Space, message } from "antd";
import imgLogo from "../../assets/images/ada.jpg";
import useAuthContext from "../../store/useAuthContext";
import { useNavigate, useParams } from "react-router-dom";

import { newPassword } from "../../utils/newPassword";

function NewPassword() {
  const loading = useAuthContext((state) => state.loading);

  // Extract URL parameters using useParams
  const { keyId, keyToken } = useParams();

  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    try {
      // Include the URL parameters in the form submission
      const dataToSubmit = {
        ...values,
        encoded_pk: keyId,
        token: keyToken,
      };

      await newPassword(dataToSubmit);

      messageApi.success("Password reset successful");
      // Redirect to login page after successful reset
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      if (error.message === "Network Error") {
        return messageApi.error("Please check your network");
      } else if (
        error.response?.data?.message === "Invalid email and password!"
      ) {
        messageApi.error("Invalid credentials");
      } else {
        messageApi.error("Internal Server Error");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen flex-col">
      {contextHolder}
      <div className="mb-10">
        <img src={imgLogo} alt="logo" className="w-[150px] h-[150px]" />
        <Typography.Title
          level={3}
          style={{
            margin: 0,
            textAlign: "center",
            color: "#4195FD",
            fontWeight: "400",
          }}
          className="pb-0"
          color="#4195FD"
        >
          Reset Password
        </Typography.Title>
      </div>
      <Space />
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="New Password"
          name="password"
          rules={[
            { required: true, message: "Please input your new password!" },
            { min: 6, message: "Password must be at least 6 characters!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirm_password"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* login */}
        <Typography.Link
          href="/"
          style={{
            color: "#4195FD",
            fontWeight: "400",
            fontSize: "16px",
          }}
        >
          Back to Login
        </Typography.Link>

        <Form.Item>
          <Button
            size="large"
            className="w-full"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Reset Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default NewPassword;
