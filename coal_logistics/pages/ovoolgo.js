import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { LineChart, PieChart } from "@/components/charts";
import { Cards } from "@/components/cardLine";
import Image from "next/image";
import Link from "antd/lib/typography/Link";
const { Header, Sider, Content } = Layout;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
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
            <Link className={collapsed ? "hidden" : ""} href="/" key={1}>
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link className={collapsed ? "hidden" : ""} href="/" key={2}>
              Something
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link className={collapsed ? "hidden" : ""} href="/ovoolgo" key={3}>
              Ovoolgo
            </Link>
          </Menu.Item>
        </Menu>
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
            minHeight: 2500,
            background: colorBgContainer,
            borderRadius: 12,
          }}
        >
          <div className="w-screen h-screen flex justify-start items-start ">
            <div className="w-5/6 h-5/6 flex flex-col mt-12  ml-20">
              <div className="w-full h-12 flex justify-center items-center">
                <div className="w-1/3 h-fullflex justify-center items-center">
                  <div className="w-48 bg-white h-8 rounded-lg border-main border-2 drop-shadow-lg flex justify-start items-center fixed">
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
                <div className="w-1/3 h-full flex justify-end items-center mr-32 mt-5">
                  <Button
                    className="bg-main w-32 h-8 fixed"
                    onClick={clickaddNew}
                    type="primary"
                  >
                    Шинэ
                  </Button>
                </div>
              </div>
            </div>
            <div
              className={
                addnew
                  ? "w-1/2 h-1/2 bg-accent3/50 fixed rounded-xl drop-shadow-lg backdrop-blur-md flex flex-col justify-start items-center m-40 ml-60"
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
                <div className="w-1/3 h-full  mr-5 rounded-2xl flex justify-center items-center flex-col">
                  <Dragger
                    {...props}
                    className="bg-white rounded-xl h-full w-full"
                    id="fileSelect"
                    type="file"
                    accept="application/pdf"
                  >
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Файлаа энд орхино уу</p>
                    <p className="ant-upload-hint">Зөвхөн PDF оруулна</p>
                  </Dragger>
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
