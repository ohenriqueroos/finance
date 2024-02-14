import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import RootPage from "./pages/RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
