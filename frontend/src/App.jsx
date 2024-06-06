import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { SetportfolioData } from "./redux/rootSlice";
export default function App() {
  // const [Loading, setLoading] = useState(false);
  const { loading, portfoliodata  } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getdata = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/portfolio/get-portfolio-data"
      );
      // console.log(response.data);
      dispatch(SetportfolioData(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    console.log(portfoliodata);
  }, [portfoliodata]);

  return (
    <>
      <BrowserRouter>
        {loading ? <Loader /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
