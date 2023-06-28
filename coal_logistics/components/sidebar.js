import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Alert, Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { LineChart, PieChart } from "@/components/charts";
import { Cards } from "@/components/cardLine";
import Image from "next/image";
import { useRouter } from "next/router";
import Item from "antd/es/list/Item";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter();
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="w-full h-16 flex justify-center items-center">
        <Image src={"/logo1.png"} width={100} height={50} />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        className="mt-5"
        onClick={(e) => router.push(`/${key}`)}
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "/",
            icon: <UserOutlined />,
            label: "nav 1",
          },
          {
            key: "/ovoolgo",
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
  );
};
export default Sidebar;
