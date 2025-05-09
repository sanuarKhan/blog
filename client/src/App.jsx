import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import CreateBlog from "./pages/CreateBlog";
import DashBoard from "./pages/DashBoard";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className=" bg-gradient-to-bl to-gray-900 from-indigo-600 w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/update/:id" element={<CreateBlog />} />

            <Route path="/dashboard" element={<DashBoard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
