import { Form, Input, Button, Typography, Space, message } from "antd";
import imgLogo from "../../assets/images/ada.jpg";
import useAuthContext from "../../store/useAuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const logIn = useAuthContext((state) => state.logIn);
  const loading = useAuthContext((state) => state.loading);

  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    try {
      await logIn(values);
      navigate("/home");
    } catch (error) {
      if (error.message === "Network Error") {
        return messageApi.error("Please check your network");
      } else if (
        error.response.data.message === "Invalid email and password!"
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
          ADA Login
        </Typography.Title>
      </div>
      <Space />
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Member_Id"
          name={"Member_Id"}
          rules={[{ required: true, message: "Please input your MemberID!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name={"Password"}
          rules={[{ required: true, message: "Please input your MemberID!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button
            size="large"
            className="w-full"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
