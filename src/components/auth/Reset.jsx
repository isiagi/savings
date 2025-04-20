import { Form, Input, Button, Typography, Space, message } from "antd";
import imgLogo from "../../assets/images/ada.jpg";
import useAuthContext from "../../store/useAuthContext";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../utils/resetPassword";

function Reset() {
  const loading = useAuthContext((state) => state.loading);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await resetPassword(values);
      messageApi.success("Reset password link sent to your email");
      // Navigate to login page after successful submission
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      if (error?.message === "Network Error") {
        messageApi.error("Please check your network");
      } else if (error?.response?.data?.message === "User not found") {
        messageApi.error("Member ID not found");
      } else {
        messageApi.error("Failed to process request");
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
          Forgot Password
        </Typography.Title>
      </div>
      <Space />
      <div className="max-w-md w-full px-6">
        <p className="text-center mb-4 text-gray-600">
          Enter your Member ID and we&apos;ll send you a link to reset your
          password.
        </p>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Member ID"
            name="Member_Id"
            rules={[
              { required: true, message: "Please input your Member ID!" },
            ]}
          >
            <Input size="large" placeholder="Enter your Member ID" />
          </Form.Item>

          <Form.Item className="mt-6">
            <Button
              size="large"
              className="w-full"
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              Send Reset Link
            </Button>
          </Form.Item>

          <div className="text-center mt-4">
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
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Reset;
