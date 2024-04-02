import React, { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { Layout } from "../components/Layout";
import Home from "../pages/Home";

const ProfileApp = lazy(() => import("profile-app/profileApp"));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: `/profile/*`,
        element: <Suspense fallback="Loading App1..."><ProfileApp /></Suspense>,
      }
      
    ],
  }
];