import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

function ProtectedRoute({ children }) {
  const [{ user }] = useContext(DataContext);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}

export default ProtectedRoute;
