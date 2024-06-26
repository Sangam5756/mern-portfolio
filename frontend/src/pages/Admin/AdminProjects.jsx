import { Form, Modal, message } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { hideLoading, ReloadData, showLoading } from "../../redux/rootSlice";

function AdminProjects() {
  const { portfoliodata } = useSelector((state) => state.root);
  const { projects } = portfoliodata;
  const dispatch = useDispatch();

  const [showAddEditModel, setShowAddEditModel] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = useState("add");

  const onFinish = async (values) => {
    try {
      const tempTechnologies = values.technologies.split(",");
      values.technologies = tempTechnologies;
      dispatch(showLoading());
      let response;

      if (selectedItemForEdit) {
        response = await axios.post(
          "http://localhost:3000/api/portfolio/update-projects",
          {
            ...values,
            _id: selectedItemForEdit._id,
          }
        );
      } else {
        response = await axios.post(
          "http://localhost:3000/api/portfolio/add-projects",
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
        "/api/portfolio/delete-projects",
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
          Add Projects
        </button>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-1 gap-5 mt-5">
        {projects.map((project) => (
          <div className="shadow border border-gray-400 p-5 gap-5 flex flex-col">
            <h1 className="text-primary text-xl font-bold">{projects.title}</h1>
            <hr />
            <img src={project.image} alt="" className="h-60 w-80" />
            <h1> Role :{project.title}</h1>
            <h1>{project.description}</h1>
            <div className="flex gap-5 mt-5 justify-end">
              <button
                className="bg-red-500 text-white  px-5 py-2"
                onClick={() => {
                  onDelete(project);
                }}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white  px-5 py-2"
                onClick={() => {
                  setSelectedItemForEdit(project);
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
      {(type === "add" || selectedItemForEdit) && (
        <Modal
          visible={showAddEditModel}
          title={selectedItemForEdit ? "Edit Projects" : "Add Projects"}
          footer={null}
          onCancel={() => {
            setShowAddEditModel(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={
              {
                ...selectedItemForEdit,
                technologies: selectedItemForEdit?.technologies?.join(" , "),
              } || {}
            }
          >
            <Form.Item name="title" label="title">
              <input placeholder="title" />
            </Form.Item>

            <Form.Item name="image" label="Image">
              <input placeholder="Image" />
            </Form.Item>

            <Form.Item name="description" label="Description">
              <textarea placeholder="Description" />
            </Form.Item>

            <Form.Item name="link" label="Link">
              <input placeholder="Link" />
            </Form.Item>
            <Form.Item name="githubrepo" label="Github-Link">
              <input placeholder="Github-Link" />
            </Form.Item>
            <Form.Item name="technologies" label="Technologies">
              <input placeholder="Technologies" />
            </Form.Item>

            <div className="flex justify-end">
              <button
                className="border-primary text-primary px-5 py-2"
                onClick={() => {
                  setShowAddEditModel(false);
                  setSelectedItemForEdit(null);
                }}
              >
                Cancel
              </button>
              <button className="bg-primary text-white px-5 py-2">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </>
  );
}

export default AdminProjects;
