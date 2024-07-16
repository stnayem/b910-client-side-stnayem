import { Link, useLocation, useNavigate } from 'react-router-dom';
import Matterhorn from '../assets/europe-imgs/16_Matterhorn_Zermatt.jpg';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useAuth from '../auth/useAuth';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const {
        loading,
        setLoading,
        signupwithemailpassword,
        updateUserProfile,
        signinWithGoogle,
        signinWithGithub,
        logOut
    } = useAuth() || {};

    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoUrl = e.target.photoUrl.value;
        const password = e.target.password.value;
        const user = { name, email, photoUrl, password };
        console.log(user);

        //Password validation
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
            .test(password)) {
            toast.error("Input a password which has minimum 6 character, 1 lowercase, 1 uppercase, 1 special-char, 1 number.")
        }

        //Create new user  
        signupwithemailpassword(email, password)
            .then(result => {
                updateUserProfile(name, photoUrl)
                    .then(() => {
                        console.log(result.user)
                        setLoading(false);
                        navigate(location?.state ? location?.state : "/");
                        // navigate('/');
                        // toast.success('Registered successful')
                    })
            })
            .catch(error => {
                console.error("02", error)
                // setLoading(false);
                // toast.error(error.message);
            });




    }

    // const handleProviderSignIn = (provider) => {
    //     provider()
    //         .then(result => {
    //             if (result.user) {
    //                 console.log(result.user);
    //                 // navigate((location?.state ? (location.state) : '/'), { state: { from: 'login' } })
    //             }

    //         })
    //         .catch(error => {
    //             console.error("Oops, error", error);
    //             // toast.error('Oops, login failed!');
    //         });
    // }

    const handleGoogleProvider = () => {
        signinWithGoogle()
            .then((result) => {
                console.log(result.user)
                setLoading(false);
                navigate(location?.state ? location.state : "/");
                toast.success("Login successful");
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
                toast.error(err.message);
            });
    }

    return (
        <div className="relative bg-cover bg-center h-screen">
            <Toaster toastOptions={{ duration: 6000, }} />
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
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Find exclusive rewards in every corner of the world!
                        </p>
                    </div>
                    <div className="w-1/2 card bg-base-100 shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photoUrl" type="text" placeholder="Photo URL" className="input input-bordered" required />
                            </div>




                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className="w-full text-center">
                                <span>Already have an account? </span>
                                <Link to='/login' className="font-bold text-blue-700">Login</Link>
                            </div>
                        </form>
                        <div className="my-2 flex flex-col sm:flex-row sm:justify-center sm:space-x-4
                            *:py-2 *:flex *:items-center *:px-4 *:rounded-lg *:bg-[#F8EDE3]">
                            <button onClick={() => handleGoogleProvider()}><FcGoogle className="mr-2" />Sign up with Google</button>
                            <button onClick={() => handleGoogleProvider()}><FaGithub className="mr-2" />Sign up with Github</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;