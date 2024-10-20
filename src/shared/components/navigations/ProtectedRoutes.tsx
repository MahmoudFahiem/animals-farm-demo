import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { RoutesConfig } from "../../../configs/routes";
import { AuthStatus, useAuth } from "../../context/AuthContext";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const { status } = useAuth();

  useEffect(() => {
    if (status !== AuthStatus.LOGGED_IN) navigate(RoutesConfig.LOGIN);
  }, [status, navigate]);

  return <Outlet />;
};

export default ProtectedRoutes;
