import { Navigate, Route, Routes } from "react-router-dom";
import { RoutesConfig } from "../../../configs/routes";
import Animals from "../../../pages/Animals.js";
import Login from "../../../pages/Login.js";
import ProtectedRoutes from "../navigations/ProtectedRoutes";
import AuthLayout from "./AuthLayout";

const Layout = () => {
  return (
    <Routes>
      <Route path={RoutesConfig.LOGIN} element={<Login />} />
      <Route path={RoutesConfig.ROOT} element={<ProtectedRoutes />}>
        <Route element={<AuthLayout />}>
          <Route index element={<Navigate to={RoutesConfig.ANIMALS} />} />
          <Route path={RoutesConfig.ANIMALS} element={<Animals />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Layout;
