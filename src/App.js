import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from "./components/Body";
// import About from "./components/About";
import Contact from './components/Contact';
import Profile from './components/Profile'
import RestaurantMenu from './components/RestaurantMenu'
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";

const Instamart = lazy(() => import('./components/Instamart'));
const About = lazy(() => import('./components/About'));

const AppLayout = () => {

    return (
        <Provider store={store}>
            <div>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body userData={{
                    name: "User1",
                    email: 'user1@xyz.com',
                }} />,
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>Loading......</h1>}>
                        <About />
                    </Suspense>
                ),
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ],
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/body",
                element: <Body />,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />,
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
                )
            },
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

// root.render(<AppLayout />);
