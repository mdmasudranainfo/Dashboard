import { createBrowserRouter } from "react-router-dom";
import DashboardHome from "../Components/DashboardComponent/DashboardHome/DashboardHome";
import DashboardLayout from "../Components/Layout/MainLayout/DashboardLayout/DashboardLayout";
import MainLayout from "../Components/Layout/MainLayout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/",
        element: <DashboardHome />,
      },
    ],
  },
]);
