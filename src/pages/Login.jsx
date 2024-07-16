import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Matterhorn from '../assets/europe-imgs/16_Matterhorn_Zermatt.jpg';
import useAuth from "../auth/useAuth";
import toast, { Toaster } from "react-hot-toast";
import GoogAndGitSignIn from "../components/GoogAndGitSignIn";


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        setLoading,
        signinwithemailpassword,
    } = useAuth() || {};

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = { email, password };
        console.log(user);

        // Sign in with email and password
        signinwithemailpassword(email, password)
            .then(result => {
                console.log(result.user)
                setLoading(false);
                navigate(location?.state ? location?.state : "/");
                toast.success("Login successful");
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
                toast.error(error.message);
            })
    }
    return (
        <div>
            <Toaster toastOptions={{ duration: 6000, }} />
            <div className="relative bg-cover bg-center h-screen">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${Matterhorn})`,
                        backgroundSize: "100% 100%",
                        backgroundOrigin: "content-box",
                        filter: "brightness(60%)",
                        zIndex: -1,
                    }}
                ></div>
                <div className="relative z-10 hero  min-h-screen"
                >
                    <div className="w-full  hero-content flex-col lg:flex-row-reverse">
                        <div className="w-1/2  text-center lg:text-left text-white"
                        >
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">
                                Find exclusive rewards in every corner of the world!
                            </p>
                        </div>
                        <div className="w-1/2 card bg-base-100 shrink-0 shadow-2xl">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className="w-full text-center">
                                    <span>Do not have an account? </span>
                                    <Link to='/register' className="font-bold text-blue-700">Register</Link>
                                </div>
                            </form>
                            <GoogAndGitSignIn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;