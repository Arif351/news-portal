import Home from "../Pages/Home/Home";
import Main from "../Main/Main";
import Category from "../Pages/Category/Category";
import News from "../Pages/News/News";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "../Others/TermsAndConditions/TermsAndConditions";
import Profile from "../Pages/Profile/Profile";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children:
            [{
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news-details/${params.id}`)
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }

            ]
    }
]);