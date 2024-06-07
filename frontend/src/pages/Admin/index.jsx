import React from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import AdminExperience from "./AdminExperience";

function index() {
  const { portfoliodata } = useSelector((state) => state.root);
  return (
    <div>
      <Header />
     {portfoliodata &&  <div className="mt-5 p-5">
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
            {
              label: "Experience",
              key: "3",
              children: <AdminExperience />,
            },
          ]}
        />
      </div>}
    </div>
  );
}

export default index;
