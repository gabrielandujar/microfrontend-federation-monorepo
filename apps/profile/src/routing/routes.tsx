import React, { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Profile from "../pages/Profile";
import Edit from "../pages/Edit";


export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet/>,
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: `/edit`,
        element: <Edit/>,
      }
    ],
  }
];