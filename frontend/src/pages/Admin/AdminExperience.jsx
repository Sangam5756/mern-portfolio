import { Form, Modal, message } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { hideLoading, ReloadData, showLoading } from "../../redux/rootSlice";

function AdminExperience() {
  const { portfoliodata } = useSelector((state) => state.root);
  const { experiences } = portfoliodata;
  const dispatch = useDispatch();

  const [showAddEditModel, setShowAddEditModel] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      let response;

      if (selectedItemForEdit) {
        response = await axios.post(
          "http://localhost:3000/api/portfolio/update-experience",
          {
            ...values,
            _id: selectedItemForEdit._id,
          }
        );
      } else {
        response = await axios.post(
          "http://localhost:3000/api/portfolio/add-experience",
          values
        );
      }

      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModel(false);
        setSelectedItemForEdit(null);
        dispatch(hideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());

      message.error(message.error);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "http://localhost:3000/api/portfolio/delete-experience",
        {
          _id: item._id,
        }
      );
      dispatch(hideLoading());

      if (response.data.success) {
        message.success(response.data.message);
        dispatch(hideLoading);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      hideLoading();
      message.error(error.message);
    }
  };

  return (
    <>
      <div className="flex justify-end">
        <button
          className="bg-primary text-white px-5 py-2"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModel(true);
            
            
          }}
       
        >
          Add Experience
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5">
        {experiences.map((experience) => (
          <div className="shadow border border-gray-400 p-5  flex flex-col">
            <h1 className="text-primary text-xl font-bold">
              {experience.period}
            </h1>
            <hr />
            <h1> company : {experience.company}</h1>
            <h1> Role :{experience.title}</h1>
            <h1>{experience.description}</h1>
            <div className="flex gap-5 mt-5 justify-end">
              <button
                className="bg-red-500 text-white  px-5 py-2"
                onClick={() => {
                  onDelete(experience);
                }}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white  px-5 py-2"
                onClick={() => {
                  setSelectedItemForEdit(experience);
                  setShowAddEditModel(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      {(type === "add" || selectedItemForEdit) &&
      <Modal
      visible={showAddEditModel}
      title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
      footer={null}
      onCancel={() => {
        setShowAddEditModel(false);
        setSelectedItemForEdit(null)
      }}
    >
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={selectedItemForEdit || {}}
      >
        <Form.Item name="period" label="Period">
          <input placeholder="Period" />
        </Form.Item>

        <Form.Item name="company" label="Company">
          <input placeholder="Company" />
        </Form.Item>
        <Form.Item name="title" label="Title">
          <input placeholder="Title" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <textarea placeholder="Description" />
        </Form.Item>
        <div className="flex justify-end">
          <button
            className="border-primary text-primary px-5 py-2"
            onClick={() => {
              setShowAddEditModel(false);
              setSelectedItemForEdit(null)

            }}
          >
            Cancel
          </button>
          <button className="bg-primary text-white px-5 py-2">
            {selectedItemForEdit ? "Update" : "Add"}
          </button>
        </div>
      </Form>
    </Modal>}
    </>
  );
}

export default AdminExperience;
