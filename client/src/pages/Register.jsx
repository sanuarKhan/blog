import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BaseURL = import.meta.env.VITE_BASE_URL;
console.log(BaseURL);

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${BaseURL}/api/v1/user/register`,
        {
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      console.log(res.data);
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      message.error("registration failed");
      console.log(error);
    }
  };
  return (
    <div className="  flex flex-col  items-center justify-center  bg-gradient-to-tr from-slate-800 to-gray-500 rounded-lg shadow-lg w-1/3 h-auto p-5 m-auto mt-10">
      <h1 className="text-center text-2xl text-blue-200">Register</h1>
      <form
        className="text-cyan-400 p-3 flex flex-col gap-4 w-full "
        onSubmit={handleSubmit}
      >
        <div className="flex gap-5 bg-gray-800 rounded-lg p-2">
          <label htmlFor="username">Username: </label>
          <input
            className="bg-gray-800 text-amber-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-lg w-full"
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
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
          Register
        </button>
      </form>
    </div>
  );
}
