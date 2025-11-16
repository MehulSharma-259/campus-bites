import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth"

export const ProtectedRoutes = () => {
  const {isAuthenticated} = useAuth();

  if(!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet/>
}