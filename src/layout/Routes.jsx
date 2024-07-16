import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyList from "../pages/MyList";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/',
                element: <AllTouristsSpot />
            },
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/',
                element: <Register />
            },
            {
                path: '/',
                element: <MyList />
            }

        ]
    }
]);
export default router;