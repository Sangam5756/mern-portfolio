import React from "react";
import { Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { message } from "antd";
import {
  SetportfolioData,
  hideLoading,
  showLoading,
} from "../../redux/rootSlice";
import axios from "axios";

function AdminAbout() {
  const { portfoliodata } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      const tempSkills = values.skills.split(",");
      values.skills = tempSkills;
      dispatch(showLoading);
      const response = await axios.post(
        "http://localhost:3000/api/portfolio/update-about",
        {
          ...values,
          _id: portfoliodata.about._id,
        }
      );
      dispatch(hideLoading);

      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading);
    }
  };
  return (
    <>
      <div>
        <Form
          onFinish={onFinish}
          layout="vertical"
          initialValues={{
            ...portfoliodata.about,
            skills: portfoliodata.about.skills.join(" , "),
          }}
        >
          <Form.Item name="lottieURL" label="lottieURL">
            <input placeholder="lottie URL" />
          </Form.Item>

          <Form.Item name="description1" label="description1">
            <textarea placeholder="Description 1" />
          </Form.Item>
          <Form.Item name="description2" label="description2">
            <textarea placeholder="Description 1" />
          </Form.Item>
          <Form.Item name="skills" label="skills">
            <textarea placeholder="skills" />
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

export default AdminAbout;
