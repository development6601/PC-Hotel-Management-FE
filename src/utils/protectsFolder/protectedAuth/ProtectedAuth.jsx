import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedAuth = ({ children }) => {
  const { data: user } = useSelector((state) => state.user);
  
  
  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedAuth;

