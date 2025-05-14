import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import About from "./pages/About";
import Blog from "./pages/Blog";
import CreateBlog from "./pages/CreateBlog";
import DashBoard from "./pages/DashBoard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleBlog from "./pages/SingleBlog";
import UpdateBlog from "./pages/UpdateBlog";

export default function App() {
  return (
    <div className=" bg-gradient-to-bl to-gray-900 from-indigo-600 w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about-me" element={<About />} />
              <Route path="/create" element={<CreateBlog />} />
              <Route path="/update/:id" element={<UpdateBlog />} />
              <Route path="/blog/:id" element={<SingleBlog />} />
              <Route path="/dashboard" element={<DashBoard />} />
            </Route>
          </Route>
          <Route element={<PublicRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about-me" element={<About />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
