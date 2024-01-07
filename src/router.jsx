import React from "react"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import CreateUser from "./pages/CreateUser"
import CreateReport from "./pages/CreateReport"
import RecapReport from "./pages/RecapReport"
import ListUser from "./pages/ListUser"
import ActivityReport from "./pages/ActivityReport"
export const router = [
    {
        path: '/',
        element: <Dashboard />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/createUser',
        element: <CreateUser />,
    },
    {
        path: '/recapReport',
        element: <RecapReport />,
    },
    {
        path: '/createReport',
        element: <CreateReport />,
    },
    {
        path: '/listUser',
        element: <ListUser />,
    },
    {
        path: '/activityReport',
        element: <ActivityReport />,
    },
]