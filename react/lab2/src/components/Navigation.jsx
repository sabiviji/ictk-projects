import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="menu">
            <div className="wrapper">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/business">Business News</Link>
                    <Link to="/finance">Finance News</Link>
                    <Link to="/sports">Sports News</Link>
                </ul>
            </div>
        </nav>
  )
}

export default Navigation