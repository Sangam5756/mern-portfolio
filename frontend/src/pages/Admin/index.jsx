import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import AdminExperience from "./AdminExperience";
import AdminProjects from "./AdminProjects";
import AdminContact from "./AdminContact";

function index() {
  const { portfoliodata } = useSelector((state) => state.root);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="flex gap-10 items-center px-5 py-2 justify-between">
        <div className="flex gap-10 items-center">
          <h1 className="text-3xl text-primary font-semibold">
            Portfolio Admin
          </h1>
          <div className="w-60 h-[1px] bg-gray-500"></div>
        </div>
        <h1
          className="underline text-primart text-xl cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }}
        >
          Logout
        </h1>
      </div>

      {portfoliodata && (
        <div className="mt-5 px-5 pb-10">
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
              {
                label: "Projects",
                key: "4",
                children: <AdminProjects />,
              },
              {
                label: "Contact",
                key: "5",
                children: <AdminContact />,
              },
            ]}
          />
        </div>
      )}
    </div>
  );
}

export default index;
