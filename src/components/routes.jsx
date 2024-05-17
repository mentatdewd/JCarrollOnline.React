import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./authprovider";
import { ProtectedRoute } from "../components/protectedroute";
import HomePage from "../pages/homepage";
import UsersPage from "../pages/usersPage";
import ForaPage from "../pages/forapage";
import ForumPage from "../pages/forumpage";
import ForumThreadPage from "../pages/forumthreadpage";
import ProfilePage from "../pages/profilepage";
import AboutPage from "../pages/aboutpage";
import ContactPage from "../pages/contactpage";
import SandboxPage from "../pages/sandboxpage";
import YellowstonePage from "../pages/yellowstonepage";
import RegisterPage from "../pages/registerpage";
import LoginPage from "../pages/loginpage";
import ForgotPasswordPage from "../pages/forgotpassword";
import NotFoundPage from "../pages/notfoundpage";

const Routes = () => {
    const { token } = useAuth();

    // Define public routes accessible to all users
    const routesForPublic = [
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/fora",
            element: <ForaPage />
        },
        {
            path: "/fora/:forumId",
            element: <ForumPage />
        },
        {
            path: "/fora/:forumId/:threadId",
            element: <ForumThreadPage />
        },
        {
            path: "/about",
            element: <AboutPage />
        },
        {
            path: "/contact",
            element: <ContactPage />
        },
        {
            path: "/register",
            element: <RegisterPage />
        },
        {
            path: "/login",
            element: <LoginPage />
        },
        {
            path: "/forgot-password",
            element: <ForgotPasswordPage />
        },
];

    // Define routes accessible only to authenticated users
    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
            children: [
                {
                    path: "/users",
                    element: <UsersPage />
                },
                {
                    path: "/profile",
                    element: <ProfilePage />
                },
                {
                    path: "/sandbox",
                    element: <SandboxPage />
                },
                {
                    path: "/yellowstone",
                    element: <YellowstonePage />
                },
                {
                    path: "*",
                    element: <NotFoundPage />
                },
/*         {
          path: "/",
          element: <div>User Home Page</div>,
        },
        {
          path: "/profile",
          element: <div>User Profile</div>,
        },
        {
          path: "/logout",
          element: <div>Logout</div>,
        },
 */      ],
        },
    ];

    // Define routes accessible only to non-authenticated users
    const routesForNotAuthenticatedOnly = [
        {
            path: "/",
            element: <div>Home Page</div>,
        },
        {
            path: "/login",
            element: <div>Login</div>,
        },
    ];

    // Combine and conditionally include routes based on authentication status
    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]);

    // Provide the router configuration using RouterProvider
    return <RouterProvider router={router} />;
};

export default Routes;