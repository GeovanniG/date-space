import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-nav">
            <NavLink className="navbar-brand" to="/">Brand</NavLink>
            <NavLink className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></NavLink>
            <NavLink className="nav-item nav-link" to="/form">Icon</NavLink>
            <NavLink className="nav-item nav-link" to="/">Pricing</NavLink>
            </div>
        </nav>
    )
}

export default Header;