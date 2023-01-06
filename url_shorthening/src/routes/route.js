import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import Pricing from "../pages/Pricing";
import Features from "../pages/Features";
import Resources from "../pages/Resources";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "features",
                element: <Features />
            },
            {
                path: "pricing",
                element: <Pricing />
            }
            ,{
                path: "resources",
                element: <Resources/>
            },
            {
                path: "login",
                element: <LogIn/>
            },
            {
                path:"signup",
                element: <SignUp/>
            }
        ]
    }
]