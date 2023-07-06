import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import Link from "antd/lib/typography/Link";
import { LineChart, PieChart } from "@/components/charts";
import { Cards } from "@/components/cardLine";
import Image from "next/image";

const { Header, Sider, Content } = Layout;
export default function table() {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [main, setMain] = useState();

  return (
    <Layout>
      <Sider>
        <div
          className={
            collapsed
              ? "w-full h-16 hidden"
              : "w-full h-16 flex justify-center items-center"
          }
        >
          <Image src={"/logo1.png"} width={100} height={0} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          className="mt-5"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item>
            <Link className={collapsed ? "hidden" : ""} href="/" key={1}>
              Хяналтын Самбар
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link className={collapsed ? "hidden" : ""} href="/table" key={2}>
              Хүснэгт
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link className={collapsed ? "hidden" : ""} href="/ovoolgo" key={3}>
              Овоолго
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="overflow-auto">
        <Header
          style={{
            padding: 0,
            background: "#FFFFFF",
          }}
        >
          <div className="w-full h-full flex justify-between">
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
            <div className=""></div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: 12,
          }}
        >
          <div className="px-16 flex flex-col gap-6">
            <div className="flex gap-6 justify-center items-center">
              <Cards />
            </div>
            <div className=" w-full h-full flex justify-center items-center flex-row">
              <LineChart />
              <PieChart />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}