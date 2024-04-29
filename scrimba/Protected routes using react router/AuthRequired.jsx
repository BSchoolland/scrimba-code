import React from "react"
import { Outlet, Navigate } from 'react-router-dom'

export default function AuthRequired() {
    /**
     * Challenge: re-implement the AuthRequired logic.
     * Clicking "Protected Route" should automatically navigate
     * users to the /login route (even though it doesn't exist yet,
     * don't worry about that part for now).
     */
    
    const authenticated = true
    
    if (authenticated) {
        return <Outlet />
    }
    
    return <Navigate to='/login'/>
}