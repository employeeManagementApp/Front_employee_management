import React from "react"
import UserList from "./UtilsComponent/UserListComponent/UserList.jsx"
import SaveComponent from "./UtilsComponent/SaveComponent/SaveComponent.jsx"
import NewProject from "./UtilsComponent/NewProject/NewProject.jsx"
import AllProject from "./UtilsComponent/AllProject/AllProject.jsx"
import { FaUserPlus } from "react-icons/fa"
import { FaUserGroup } from "react-icons/fa6"
import { FaTools } from "react-icons/fa"
import { FaFolder } from "react-icons/fa6"

export const ActionList = [
    {
        id: 1,
        title: 'All Employee',
        component: () => <UserList />,
        icon: <FaUserGroup></FaUserGroup>
    },
    {
        id: 2,
        title: 'Add new Employee',
        component: () => <SaveComponent />,
        icon: <FaUserPlus></FaUserPlus>
    },
    {
        id: 3,
        title: 'All projects',
        component: () => <AllProject />,
        icon: <FaFolder></FaFolder>
    },
    {
        id: 4,
        title: 'Create project',
        component: () => <NewProject />,
        icon: <FaTools></FaTools>
    },
]