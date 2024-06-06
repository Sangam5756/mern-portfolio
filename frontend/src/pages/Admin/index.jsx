import React from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";

function index() {
  return (
    <div>
      <Header />
      <div className="mt-5 p-5">
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: "Intro",
              key: "1",
              children: <AdminIntro />,
            },
            {
              label: "About",
              key: "2",
              children: <AdminAbout />,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default index;
