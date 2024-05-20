import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./authProvider";
import { ProtectedRoute } from "./protectedRoute";
import HomePage from "../pages/homePage";
import UsersPage from "../pages/usersPage";
import ForaPage from "../pages/foraPage";
import ForumPage from "../pages/forumPage";
import ThreadPage from "../pages/threadPage";
import ProfilePage from "../pages/profilePage";
import AboutPage from "../pages/aboutPage";
import ContactPage from "../pages/contactPage";
import SandboxPage from "../pages/sandboxPage";
import YellowstonePage from "../pages/yellowstonePage";
import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import ForgotPasswordPage from "../pages/forgotPasswordPage";
import NotFoundPage from "../pages/notFoundPage";
import LogoutPage from "../pages/logoutPage";
import CreateForumPage from "../pages/createForumPage";

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
            path: "/thread/:rootThreadId",
            element: <ThreadPage />
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
                    path: "/logout",
                    element: <LogoutPage />
                },
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
                    path: "/create-forum",
                    element: <CreateForumPage />,
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