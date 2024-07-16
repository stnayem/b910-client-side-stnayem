
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

const PrivateRoutes = ({ children }) => {
    const location = useLocation()
    const {
        loading,
        setLoading,
        user,
        signinwithemailpassword,
        signupwithemailpassword,
        updateUserProfile,
        signinWithGoogle,
        signinWithGithub,
        logOut,
    } = useAuth()
    if (loading) return <span className="loading loading-spinner loading-lg"></span>

    if (user) return children;

    return <Navigate to='/login' state={location?.pathname || '/'} />
};

export default PrivateRoutes;