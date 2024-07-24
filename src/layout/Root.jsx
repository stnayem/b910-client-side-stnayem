import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";


const Root = () => {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <div className={`${darkMode ? "dark" : ""} dark:bg-[#0F172A] h-screen`}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="dark:bg-[#0F172A] dark:text-white">
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Root;