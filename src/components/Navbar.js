import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return(
    <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a class="navbar-brand name" href="#">Ryan Burnett</a>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav navItems">
                <li class="nav-item">
                <Link to="/" className="nav-link" href="#">Home</Link>
                </li>
                <li class="nav-item">
                <Link to="/portfolio" className="nav-link" href="#">Portfolio</Link>
                </li>
                <li class="nav-item">
                <Link to="/contact" className="nav-link" href="#">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;