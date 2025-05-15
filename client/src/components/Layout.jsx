import { Outlet } from "react-router-dom";
import Navber from "./Navber";

export default function Layout() {
  return (
    <>
      <Navber />

      <Outlet />
    </>
  );
}
