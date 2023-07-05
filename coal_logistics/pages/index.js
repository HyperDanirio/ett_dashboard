import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";
import { useState } from "react";
import Link from "antd/lib/typography/Link";
import { LineChart, PieChart } from "@/components/charts";
import { Cards } from "@/components/cardLine";
import Image from "next/image";

const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [main, setMain] = useState();

  return (
    <Layout className="w-screen h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed} className="px-4">
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
            <Link
              className={
                collapsed ? "hidden" : "flex justify-start items-center text-xs"
              }
              href="/"
              key={1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#D3D3D3"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <div className="w-2"></div>
              Хяналтын Самбар
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link className={collapsed ? "hidden" : ""} href="/" key={2}>
              Хуудас2
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              className={
                collapsed ? "hidden" : "flex justify-start items-center text-xs"
              }
              href="/ovoolgo"
              key={3}
            >
              <div class="w-3.5 h-3.5 flex justify-center items-center">
                <svg class="w-full h-full flex justify-center items-center">
                  <polygon
                    points="6,2 0,12 12,12"
                    class=" stroke-[#D3D3D3] stroke-1.5 fill-none"
                  />
                </svg>
              </div>
              <div className="w-2"></div>
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
            minHeight: 320,
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
};
export default App;
