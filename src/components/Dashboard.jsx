import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DollarOutlined,
  UserOutlined,
  DashboardOutlined,
  MoneyCollectOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

import { Button, Layout, Menu, theme } from "antd";
import { Link, Outlet, useParams } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { key } = useParams();

  const [selectedKey, setSelectedKey] = useState(key);

  console.log(key);

  const onClick = (e) => {
    setSelectedKey(e.key); // Update selected tab when clicked
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
              label: <Link to={"/"}>Dashboard</Link>,
            },
            {
              key: "4",
              icon: <DollarOutlined />,
              label: <Link to={"/loans/4"}>Loan</Link>,
            },

            {
              key: "3",
              icon: <MoneyCollectOutlined />,
              label: <Link to={"/savings/3"}>Savings</Link>,
            },

            {
              key: "9",
              icon: <MoneyCollectOutlined />,
              label: <Link to={"/payment/9"}>Payment</Link>,
            },

            {
              key: "5",
              icon: <BarChartOutlined />,
              label: <Link to={"/borrowers/5"}>Borrowers</Link>,
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: <Link to="/users/2">Users</Link>,
            },
            {
              key: "6",
              icon: <BarChartOutlined />,
              label: <Link to={"/reports/6"}>Reports</Link>,
            },
            {
              key: "7",
              icon: <BarChartOutlined />,
              label: <Link to={"/reports/7"}>LogOut</Link>,
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
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
