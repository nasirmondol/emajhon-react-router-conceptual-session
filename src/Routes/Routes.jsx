import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import Products from "../components/Proudcts/Products";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../components/Dahsboard/Dashboard";
import Profile from "../components/Profile/Profile";
import EditProfile from "../components/EditProfile/EditProfile";

const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/product',
                loader: () => fetch(`https://dummyjson.com/products`),
                element: <Products></Products>
            },
            // {
            //     path: '/dashboard',
            //     element: <div>this is dashboard</div>
            // },
            {
                path: '/products/:productId',
                loader: ({params}) => fetch(`https://dummyjson.com/products/${params.productId}`),
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/dashboard',
                element: <DashboardLayout></DashboardLayout>,
                children: [
                    {
                        path: '/dashboard',
                        element: <Dashboard></Dashboard>
                    },
                    {
                        path: '/dashboard/profile',
                        element: <Profile></Profile>
                    },
                    {
                        path: '/dashboard/editprofile',
                        element: <EditProfile></EditProfile>
                    },
                ]
            }
        ]
    }
])

export default myCreateRoute;