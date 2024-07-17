import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../auth/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const GoogAndGitSignIn = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {
        setLoading,
        signinWithGoogle,
        signinWithGithub,
    } = useAuth() || {};

    const handleGoogAndGitSignIn = (provider) => {
        provider()
            .then((result) => {
                console.log(result.user)
                setLoading(false);
                navigate(location?.state ? location.state : "/");
                toast.success("Register successful");
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
                toast.error(error.message);
            });
    }

    return (
        <div>
            <Toaster toastOptions={{ duration: 3000, }} />
            <div className="mb-8 flex flex-col lg:flex-row items-center lg:justify-center space-y-4 space-x-0 lg:space-y-0 lg:space-x-4
                            *:py-2 *:shadow-md *:flex *:justify-center *:items-center *:px-4 *:rounded-lg *:bg-[#F8EDE3]">
                <button className="w-5/6 lg:w-auto" onClick={() => handleGoogAndGitSignIn(signinWithGoogle)}><FcGoogle className="mr-2" />Sign in with Google</button>
                <button className="w-5/6 lg:w-auto" onClick={() => handleGoogAndGitSignIn(signinWithGithub)}><FaGithub className="mr-2" />Sign in with Github</button>
            </div>
        </div>
    );
};

export default GoogAndGitSignIn;