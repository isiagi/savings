import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DollarOutlined,
  UserOutlined,
  DashboardOutlined,
  MoneyCollectOutlined,
  BarChartOutlined,
  LogoutOutlined,
  SwapOutlined,
  RedEnvelopeOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import { Button, Layout, Menu, theme, Popconfirm, message } from "antd";
import { Link, Outlet, useParams } from "react-router-dom";
import useAuthContext from "../store/useAuthContext";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const logOut = useAuthContext((state) => state.logOut);

  const { key } = useParams();

  const [selectedKey, setSelectedKey] = useState(key);

  console.log(key);

  const onClick = (e) => {
    setSelectedKey(e.key); // Update selected tab when clicked
  };

  const confirm = async () => {
    await logOut();
  };
  const cancel = () => {
    message.success("You are still Logged In");
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          setCollapsed(collapsed);

          console.log(collapsed, type);
        }}
        breakpoint="md"
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          onClick={onClick}
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={[selectedKey]}
          items={[
            {
              key: "1",
              icon: <DashboardOutlined />,
              label: <Link to={"/home"}>Dashboard</Link>,
            },
            {
              key: "2",
              icon: <TeamOutlined />,
              label: <Link to="/home/users/2">Members</Link>,
            },
            {
              key: "4",
              icon: <DollarOutlined />,
              label: <Link to={"/home/loans/4"}>Loan</Link>,
            },

            {
              key: "3",
              icon: <MoneyCollectOutlined />,
              label: <Link to={"/home/savings/3"}>Savings</Link>,
            },

            {
              key: "9",
              icon: <UserOutlined />,
              label: <Link to={"/home/payment/9"}>Payment</Link>,
            },

            {
              key: "10",
              icon: <RedEnvelopeOutlined />,
              label: <Link to={"/home/wagubumbuzi/10"}>Wagubumbuzi</Link>,
            },
            {
              key: "5",
              icon: <SwapOutlined />,
              label: <Link to={"/home/borrowers/5"}>Borrowers</Link>,
            },

            {
              key: "6",
              icon: <BarChartOutlined />,
              label: <Link to={"/home/reports/6"}>Reports</Link>,
            },
            {
              key: "7",
              icon: <LogoutOutlined />,
              label: (
                <Popconfirm
                  placement="rightTop"
                  title="Logging out"
                  description="Are you sure to Logout?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <h1>LogOut</h1>
                </Popconfirm>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <h1 style={{ textAlign: "center" }}>
            Agalyawamm Developmet Association (ADA){" "}
          </h1>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "hidden",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
