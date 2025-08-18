import { navigate } from "react-router";
import { useAuthContext } from "../context/AuthContext";

const AdminPage = ({Children}) => {
    const {user} = useAuthContext();
    return <Navigate to="/login" />;
};
if (user?.authorities.includes("ROLES_ADMIN")) {
    return Children;
}
return <Navigate to="/notallowed" />;