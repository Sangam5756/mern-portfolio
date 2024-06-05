import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import { useState } from "react";
import Loader from "./components/Loader";

export default function App() {
  const [Loading, setLoading] = useState(false);
  return (
    <>
      <BrowserRouter>
      {Loading ? <Loader/> : null}
        <Routes>
          <Route  path="/" element={<Home/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
