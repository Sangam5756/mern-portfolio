import React from "react";
import { Form, Input } from "antd";
import { useSelector } from "react-redux";
function AdminIntro() {
  const {  portfoliodata } = useSelector((state) => state.root);

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <div>
        <Form onFinish={onFinish} layout="vertical" initialValues={portfoliodata?.intro}>
          <Form.Item name="welcomeText" label="welcomeText">
            <input placeholder="welcomeText" />
          </Form.Item>
          <Form.Item name="firstName"  label="First Name">
            <input placeholder="First Name" />
          </Form.Item>
          <Form.Item name="lastName"  label="Last Name">
            <input placeholder="Last Name" />
          </Form.Item>
          <Form.Item name="caption" label="caption">
            <input placeholder="caption" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <textarea placeholder="Description" />
          </Form.Item>
          <div className="flex justify-end w-full">
            <button className="px-10 py-2 bg-primary text-white hover:bg-tertiery duration-300 rounded-md">
              SAVE
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default AdminIntro;


// 4:18