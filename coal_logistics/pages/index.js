import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { LineChart, PieChart } from "@/components/charts";
import { Cards } from "@/components/cardLine";
import Image from "next/image";
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="w-screen h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="w-full h-16 flex justify-center items-center">
          <Image src={"/logo1.png"} width={100} height={50} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          className="mt-5"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Dashboard",
              path: "/",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout className="overflow-auto">
        <Header
          style={{
            padding: 0,
            background: "#FFFFFF",
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
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div className="px-16 flex flex-col gap-6">
            <div className="flex gap-6 justify-center items-center">
              <Cards />
            </div>
            <div className=" w-full h-full flex justify-center items-center">
              <LineChart />
              <PieChart />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
