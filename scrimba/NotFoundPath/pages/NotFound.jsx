import React from "react"
import bgImg from "../assets/images/about-hero.png"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <>
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to='/'>Back to home</Link>     
        </>
    );
}