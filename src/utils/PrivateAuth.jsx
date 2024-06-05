import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../store/useAuthContext";

const PrivateAuth = () => {
  const token = useAuthContext((state) => state.token);

  if (token) return <Navigate to="/home" />;
  return <Outlet />;
};

export default PrivateAuth;
