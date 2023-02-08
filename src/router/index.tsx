import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>This page is not found.</h1>} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
