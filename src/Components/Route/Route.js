import Home from "../Pages/Home/Home";
import Main from "../Main/Main";
import Category from "../Pages/Category/Category";
import News from "../Pages/News/News";
import Header from "../Shared/Header/Header";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children:
            [{
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                element: <News></News>
            }]
    }
]);