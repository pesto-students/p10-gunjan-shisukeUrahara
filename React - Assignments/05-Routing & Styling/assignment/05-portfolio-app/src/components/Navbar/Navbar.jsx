import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/skills" className="nav-link">Skills</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
        </nav>
    );
}

export default Navbar;
