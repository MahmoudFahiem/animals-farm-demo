import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const AuthLayout = () => {
  return (
    <div className="h-screen">
      <div>
        <Navbar />
        <main className="container h-[calc(100vh_-_6.125rem)] overflow-y-auto py-7">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
