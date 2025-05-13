import { Outlet, useNavigate } from "react-router-dom";

export default function PublicRoute() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (token) {
    return navigate("/dashboard");
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
}
