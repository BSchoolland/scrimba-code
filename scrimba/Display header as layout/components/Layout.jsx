import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header.jsx"

export default function Layout() {
    /**
     * Challenge: get the Header working again
     */
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}