import { Outlet } from "react-router-dom";
import Sidebar from './sidebar'
import React from 'react'
import Reminderbar from "./Reminderbar";

export default function Layout() {
  return (
    <>
    <Sidebar/>
    <Reminderbar/>

    <main className="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-700 sm:ml-60 w-2/3">
        <Outlet/>
    </main>
    </>
  )
}
