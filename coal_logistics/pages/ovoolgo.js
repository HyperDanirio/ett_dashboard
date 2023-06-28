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
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [addnew, setAddnew] = useState();
  function clickaddNew() {
    if (addnew == false) {
      setAddnew(true);
    } else {
      setAddnew(true);
    }
  }
  function clickCancelNew() {
    if (addnew == false) {
      setAddnew(false);
    } else {
      setAddnew(false);
    }
  }
  return (
    <Layout className="w-screen h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
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
            background: colorBgContainer,
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
          <div className="w-screen h-screen flex justify-center items-center bg-white">
            <div className="w-5/6 h-5/6 bg-white flex flex-col mt-28">
              <div className="w-full h-12 flex justify-center items-center">
                <div className="w-1/3 h-fullflex justify-center items-center">
                  <div className="w-48 bg-white h-8 rounded-xl border-main border-2 drop-shadow-lg flex justify-start items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#015EB4"
                      className="w-4 h-4 ml-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                    <input className="w-40 h-7 rounded-full text-gray-500 outline-0 pl-2 text-sm font-semibold"></input>
                  </div>
                </div>
                <div className="w-1/3 h-full"></div>
                <div className="w-1/3 h-full flex justify-center items-center">
                  <button
                    onClick={clickaddNew}
                    className="w-32 bg-main h-8 mr-12 rounded-xl drop-shadow-lg font-bold text-white flex justify-center items-center cursor-pointer hover:bg-accent2 transition-all "
                  >
                    Шинэ
                  </button>
                </div>
              </div>
            </div>
            <div
              className={
                addnew
                  ? "w-1/2 h-1/2 bg-accent3/50 fixed rounded-xl drop-shadow-lg backdrop-blur-md flex flex-col justify-start items-center mr-32 mb-40"
                  : "w-1/2 h-1/2 bg-accent3/50 fixed rounded-xl drop-shadow-lg backdrop-blur-md hidden"
              }
            >
              <div className="w-full h-8 flex justify-end items-center">
                <button
                  onClick={clickCancelNew}
                  className="w-8 h-8 flex items-center justify-center mr-1 mt-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="black"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-full h-5/6 mt-2 flex justify-center items-center">
                <div className="w-2/3 h-full flex justify-start items-center flex-col">
                  <div className="w-5/6 h-2 flex justify-center items-center text-lg font-bold text-black/50">
                    Овоолго нэмэх
                  </div>
                  <div className=""></div>
                </div>
                <div className="w-1/3 h-full border-main border-4 bg-white mr-5 rounded-2xl flex justify-center items-center flex-col">
                  <input
                    id="fileSelect"
                    type="file"
                    accept="application/pdf"
                    className="w-40 h-12 flex justify-center items-center text-black/50 -z-10"
                  />
                  <label
                    htmlFor="fileSelect"
                    className="cursor-pointer w-auto h-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#063970"
                      class="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </label>
                  <label
                    htmlFor="fileSelect"
                    className="w-auto h-auto text-black/50 text-xs font-semibold cursor-pointer mt-5"
                  >
                    <strong>Энд сонгоно уу</strong>
                  </label>
                  <label
                    htmlFor="fileSelect"
                    className="w-auto h-auto text-black/50 text-xs font-semibold cursor-pointer"
                  >
                    <span> эсвэл энд тавина уу</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
