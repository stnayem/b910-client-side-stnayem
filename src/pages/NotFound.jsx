import Navbar from "../components/Navbar";


const NotFound = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center items-center min-h-screen">
                <h1 className="text-9xl font-bold text-red-500">404</h1>
                <h1 className="text-3xl font-bold text-red-500">Page Not Found</h1>
            </div>
        </div>
    );
};

export default NotFound;