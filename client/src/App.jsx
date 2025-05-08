import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className=" bg-gradient-to-bl to-gray-900 from-indigo-600 w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
