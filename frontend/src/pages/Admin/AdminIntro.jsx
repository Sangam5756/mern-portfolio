import React from "react";
import { Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { message } from "antd";
import {
  SetportfolioData,
  hideLoading,
  showLoading,
} from "../../redux/rootSlice";
import axios from "axios";

function AdminIntro() {
  const { portfoliodata } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "http://localhost:3000/api/portfolio/update-intro",
        {
          ...values,
          _id: portfoliodata.intro._id,
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());

      message.error(message.error);
    }
  };
  return (
    <>
      <div>
        <Form
          onFinish={onFinish}
          layout="vertical"
          initialValues={portfoliodata?.intro}
        >
          <Form.Item name="welcomeText" label="welcomeText">
            <input placeholder="welcomeText" />
          </Form.Item>
          <Form.Item name="firstName" label="First Name">
            <input placeholder="First Name" />
          </Form.Item>
          <Form.Item name="lastName" label="Last Name">
            <input placeholder="Last Name" />
          </Form.Item>
          <Form.Item name="caption" label="caption">
            <input placeholder="caption" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <textarea placeholder="Description" />
          </Form.Item>
          <div className="flex justify-end w-full">
            <button
              type="submit"
              className="px-10 py-2 bg-primary text-white hover:bg-tertiery duration-300 rounded-md"
            >
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
