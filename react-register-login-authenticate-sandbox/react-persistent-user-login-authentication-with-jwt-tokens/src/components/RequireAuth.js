import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  //   return auth?.user ? (
  //     <Outlet />
  //   ) : (
  //     // It's important tp add the state={{ from: location }} replace attributes to let you naviagte back to where you came from.
  //     <Navigate to="/login" state={{ from: location }} replace />
  //   );

  return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
