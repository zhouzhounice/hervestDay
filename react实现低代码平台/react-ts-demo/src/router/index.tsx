import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ManageLayout from "../layouts/ManageLayout";
import QuestionLayout from "../layouts/QuestionLayout";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import NotFound from "../page/NotFound";
import QuestionCard from "../page/manage/List";
import Star from "../page/manage/Star";
import Trash from "../page/manage/Trash";
import Edit from "../page/questions/Edit";
import Stat from "../page/questions/Stat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },

      {
        path: "manage",
        element: <ManageLayout />,
        children: [
          {
            index: true, // This will match /manage
            // Redirect to /manage/list
            element: <Navigate to="list" replace />,
          },
          {
            path: "list",
            element: <QuestionCard />,
          },
          {
            path: "star",
            element: <Star />,
          },
          {
            path: "trash",
            element: <Trash />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "question",
    element: <QuestionLayout />,
    children: [
      {
        path: "edit/:id",
        element: <Edit />,
      },
      {
        path: "stat/:id",
        element: <Stat />,
      },
    ],
  },
]);

export default router;

// -------------------分割线--------------

export const HOME_PATHNAME: string = "/home";
export const LOGIN_PATHNAME: string = "/login";
export const REGISTER_PATHNAME: string = "/register";
export const MANAGE_PATHNAME: string = "/manage";
