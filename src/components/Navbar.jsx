import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const navLinksStyle = ({ isActive, isPending }) =>
        isPending
            ? "pending"
            : isActive
                ? "text-[#8D493A] border-b-4 border-[#8D493A] mr-4"
                : "hover:text-[#8D493A] hover:bg-[#F8EDE3] p-2 rounded-lg  mr-4";

    const navLinks = <>
        <li><NavLink className={navLinksStyle} to="/">Home</NavLink></li>
        <li><NavLink className={navLinksStyle} to="/alltouristsspot">All Tourists Spot</NavLink></li>
        <li><NavLink className={navLinksStyle} to="/mylist">My List</NavLink></li>
    </>
    return (
        <div>
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow
                            ">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">World Tour</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;