import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function MainLayout() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
