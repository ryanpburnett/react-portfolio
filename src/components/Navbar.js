import React from 'react';

function Navbar(props) {
    return(
    <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a class="navbar-brand name" href="index.html">Ryan Burnett</a>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav navItems">
                <li class="nav-item active">
                <a class="nav-link" href="index.html">Index<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="portfolio.html">Portfolio</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;