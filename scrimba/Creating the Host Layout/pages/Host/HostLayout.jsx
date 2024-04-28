import React from "react"
import { Outlet, Link } from "react-router-dom"

export default function Dashboard() {
    return (
        <>
            <header>
                <Link to='/host/income'>Income</Link>
                <Link to='/host/reviews'>Reviews</Link>
            </header>
            <Outlet />
        </>
    )
}