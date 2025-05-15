import { message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const base_URL = import.meta.env.VITE_BASE_URL;
export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${base_URL}/api/v1/user/login`, {
        email: e.target.email.value,
        password: e.target.password.value,
      });
      if (res.data.success) {
        message.success("Login successful");
        localStorage.setItem("token", res.data.data);
        navigate("/dashboard");
      }
    } catch (error) {
      message.error("Login failed");
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto flex flex-col items-center justify-center w-full h-screen ">
      <h1 className="text-center text-2xl text-blue-200">Login</h1>
      <form
        action={`${base_URL}/api/v1/user/login`}
        method="POST"
        className="text-cyan-400 flex flex-col gap-4  bg-gradient-to-tr from-slate-800 to-gray-500 rounded-lg shadow-lg  p-10 w-[50%] h-auto "
        onSubmit={handleSubmit}
      >
        <div className="flex gap-5 bg-gray-800 rounded-lg p-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="bg-gray-800 text-amber-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-lg w-full"
          />
        </div>
        <div className="flex gap-5 bg-gray-800 rounded-lg p-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="bg-gray-800 text-amber-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-lg w-full"
          />
        </div>
        <button
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg mt-4 transition duration-300 ease-in-out"
          type="submit"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-fuchsia-300">
        Don't have an account?
        <Link to="/register" className="text-blue-400 px-2">
          Register
        </Link>
      </p>
    </div>
  );
}
