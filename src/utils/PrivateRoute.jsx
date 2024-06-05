import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../store/useAuthContext";

const PrivateRoute = () => {
  const token = useAuthContext((state) => state.token);

  if (!token) return <Navigate to="/" />;
  return <Outlet />;
};

export default PrivateRoute;
