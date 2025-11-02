import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Booking from "../pages/Booking";
import Landing from "../pages/Landing";
import PetSitter from "../pages/PetSitter";
import Profile from "../pages/Profile";
import Services from "../pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/pet-sitter",
        element: <PetSitter />,
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
