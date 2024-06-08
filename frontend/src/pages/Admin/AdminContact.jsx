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

function AdminContact() {
  const { portfoliodata } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "http://localhost:3000/api/portfolio/update-contact",
        {
          ...values,
          _id: portfoliodata.contact._id,
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
          initialValues={portfoliodata?.contact}
        >
          <Form.Item name="name" label="Name">
            <input placeholder="Name" />
          </Form.Item>
          <Form.Item name="gender" label="Gender">
            <input placeholder="Gender" />
          </Form.Item>
          <Form.Item name="age" label="Age">
            <input placeholder="Age" />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <input placeholder="Email" />
          </Form.Item>
          <Form.Item name="mobile" label="Mobile">
            <input placeholder="Mobile" />
          </Form.Item>
          <Form.Item name="address" label="Address">
            <input placeholder="Address" />
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

export default AdminContact;
