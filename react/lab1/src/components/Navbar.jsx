import "../assets/css/Index.css"
import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav class="menu">
            <div class="wrapper">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/book">Book</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Login</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar