import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  SetportfolioData,
  hideLoading,
  showLoading,
  ReloadData,
} from "./redux/rootSlice";
import Admin from "./pages/Admin";
export default function App() {
  const { loading, portfoliodata, reloadData } = useSelector(
    (state) => state.root
  );
  const dispatch = useDispatch();

  const getdata = async () => {
    try {
      setTimeout(() => {
        
      }, 2000);
      dispatch(showLoading());
      const response = await axios.get(
        "http://localhost:3000/api/portfolio/get-portfolio-data"
      );
      // console.log(response.data);
      dispatch(SetportfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(hideLoading());
    } catch (error) {
      // console.log(error);
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    if (!portfoliodata) {
      getdata();
    }
  }, [portfoliodata]);

  useEffect(() => {
    if (reloadData) {
      getdata();
    }
  }, [reloadData]);

  return (
    <>
      <BrowserRouter>
        {loading ? <Loader /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
