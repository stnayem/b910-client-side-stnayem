import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyList from "../pages/MyList";
import PrivateRoutes from "./PrivateRoutes";
import NotFound from "../pages/NotFound";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import TouristSpotDetails from "../pages/TouristSpotDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/alltouristsspot',
                element: <AllTouristsSpot />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/mylist',
                element: <PrivateRoutes><MyList /></PrivateRoutes>
            },

            {
                path: '/addtouristsspot',
                element: <PrivateRoutes><AddTouristsSpot /></PrivateRoutes>
            },
            {
                path: '/spot/:id',
                element: <PrivateRoutes><TouristSpotDetails /></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5005/addTouristsSpot/${params.id}`),
            }


        ]
    }
]);
export default router;