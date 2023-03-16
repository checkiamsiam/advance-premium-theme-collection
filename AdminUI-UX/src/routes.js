import { useState, useEffect } from 'react';
import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
//
import Blog from "./pages/Blog";
import User from "./pages/User";
import Login from "./pages/Login";
import NotFound from "./pages/Page404";
import Register from "./pages/Register";
// import Products from './pages/Products';
import DashboardApp from "./pages/DashboardApp";
import Doctor from "./pages/Doctor";
import DoctorDetails from "./pages/DoctorDetails";
import Appointments from "./pages/Appointments";
import Patient from "./pages/Patient";
import doctorService from './services/doctor-service';

// ----------------------------------------------------------------------

export default function Router({ signOut, user }) {
  const [specializations, setSpecializations] = useState(null);
  useEffect(() => {
    const getAllSpc = async () => {
      try {
        const res = await doctorService.getAllSpecialization();
        setSpecializations(res?.result);
      } catch (err) {
        console.log(err);
      }
    }
    getAllSpc();
  }, []);
  return useRoutes([
    {
      path: "admin/dashboard",
      element: <DashboardLayout signOut={signOut} />,
      children: [
        { path: "app", element: <DashboardApp user={user} specializations={specializations} /> },
        { path: "appointments", element: <Appointments specializations={specializations} /> },
        { path: "doctor", element: <Doctor specializations={specializations} /> },
        { path: "doctor/:doctorId", element: <DoctorDetails specializations={specializations} /> },
        { path: "patient", element: <Patient /> },
        { path: "blog", element: <Blog /> },
      ],
    },
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        { path: "/", element: <Navigate to="admin/dashboard/app" /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
