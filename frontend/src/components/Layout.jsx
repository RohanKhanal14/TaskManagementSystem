import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CreateTask from "../pages/CreateTask";
import EditTask from "../pages/EditTask";
import DeleteTask from "../pages/DeleteTask";
import ShowTask from "../pages/ShowTask";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task/create" element={<CreateTask />} />
          <Route path="/task/edit/:id" element={<EditTask />} />
          <Route path="/task/delete/:id" element={<DeleteTask />} />
          <Route path="/task/show/:id" element={<ShowTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Layout;
