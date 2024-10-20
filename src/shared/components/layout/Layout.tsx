import { Box, CircularProgress } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { RoutesConfig } from "../../../configs/routes";
import Animal from "../../../pages/Animal.js";
import Animals from "../../../pages/Animals.js";
import Login from "../../../pages/Login.js";
import { AuthStatus, useAuth } from "../../context/AuthContext.js";
import ProtectedRoutes from "../navigations/ProtectedRoutes";
import AuthLayout from "./AuthLayout";

const Layout = () => {
  const { status } = useAuth();

  return (
    <Routes>
      <Route path={RoutesConfig.LOGIN} element={<Login />} />
      <Route
        path={RoutesConfig.ROOT}
        element={
          status === AuthStatus.LOADING || status === AuthStatus.IDLE ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <ProtectedRoutes />
          )
        }
      >
        <Route element={<AuthLayout />}>
          <Route index element={<Navigate to={RoutesConfig.ANIMALS} />} />
          <Route path={RoutesConfig.ANIMALS} element={<Animals />} />
          <Route path={`${RoutesConfig.ANIMALS}/:id`} element={<Animal />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Layout;
