import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedAdmin = ({ children }) => {
    const user = useSelector((state) => state.user.user);
    let userRole = JSON.parse(localStorage.getItem('user'))
    console.log(userRole);

    if (!userRole) {
        if (!user) {
            return <Navigate to="/login" />;
        }


    }

    if (userRole.role !== "Admin") {
        return <Navigate to="/" />;
    }
    return children;
}

export default ProtectedAdmin

