import { Link, NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";
import toast, { Toaster } from "react-hot-toast";


const Navbar = () => {

    const {
        loading,
        setLoading,
        user,
        logOut
    } = useAuth() || {};

    const navLinksStyle = ({ isActive, isPending }) =>
        isPending
            ? "pending"
            : isActive
                ? "text-[#8D493A] border-b-4 border-[#8D493A] mr-4"
                : "hover:text-[#8D493A] hover:bg-[#F8EDE3] p-2 rounded-lg  mr-4";

    const navLinks = <>
        <li><NavLink className={navLinksStyle} to="/">Home</NavLink></li>
        <li><NavLink className={navLinksStyle} to="/alltouristsspot">All Tourists Spot</NavLink></li>
        {
            user && <>
                <li><NavLink className={navLinksStyle} to="/mylist">My List</NavLink></li>

            </>
        }
    </>

    const handleLogout = () => {
        logOut()
            .then(() => toast.success("Sign out success!"))
            .catch(error => toast.error(error))
    }


    return (
        <div className="max-w-7xl mx-auto">
            <Toaster toastOptions={{ duration: 2000, }} />
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[11] mt-3 w-52 p-2 shadow
                            ">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a className="text-[#8D493A] text-lg md:text-3xl bg-[#F8EDE3] font-bold shadow-stone-500 border rounded-full py-2 px-4">World Tour</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            {/* dropdown from daisyUI */}
                            <Link to='/userProfile'
                                data-tip={user?.displayName}
                                className="tooltip tooltip-bottom h:tooltip-open border-2 rounded-full bg-[#12132D08] hover:bg-gray-200">
                                <img className="rounded-full w-10 h-10" src={user?.photoURL ? user?.photoURL : 'https://i.imgur.com/K7tQyJe.png'} alt="Profile Picture" ></img>
                            </Link>
                            <button className="bg-slate-100 mt-2 btn ml-4"><a onClick={handleLogout}>Logout</a></button>

                        </> :
                            <Link to="/login" className="text-[#8D493A] font-bold py-2 px-4 hover:bg-[#F8EDE3] border-2 rounded-lg">Login</Link>
                    }



                </div>
            </div>
        </div>
    );
};

export default Navbar;