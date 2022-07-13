import { Outlet, useLocation } from "react-router-dom";
import Login from "./login/login";

const ProtectedRoute = ({ isAuthenticated, children }) => {
    const { pathname } = useLocation();
    if (!isAuthenticated) {
        return <Login location={pathname} />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;