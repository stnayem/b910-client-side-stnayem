import { Link, NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";
import toast, { Toaster } from "react-hot-toast";


const Navbar = () => {

    const {
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
                <li><NavLink className={navLinksStyle} to="/addtouristsspot">Add Tourists Spot</NavLink></li>

            </>
        }
    </>

    const handleLogout = () => {
        logOut()
            .then(() => {
                setLoading(false);
                toast.success("Sign out success!")
            })
            .catch(error => toast.error(error))
    }


    return (
        <div className="max-w-7xl mx-auto py-4">
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
                <div className="navbar-end z-50">
                    {
                        user ? <>
                            {/* dropdown from daisyUI */}
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="shadow-lg rounded-full m-1">
                                    <img className="rounded-full w-10 h-10" src={user?.photoURL ? user?.photoURL : 'https://i.imgur.com/K7tQyJe.png'} alt="Profile Picture" ></img>
                                </div>
                                <ul tabIndex={0} className="w-32 mx-auto dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow">
                                    <li className="text-[#8D493A] font-medium mb-2   mx-auto">{user?.displayName}</li>
                                    <li><button className="btn-style"><a onClick={handleLogout}>Logout</a></button></li>
                                </ul>
                            </div>
                        </> :
                            <Link to="/login" className="btn-style">Login</Link>
                    }



                </div>
            </div>
        </div>
    );
};

export default Navbar;