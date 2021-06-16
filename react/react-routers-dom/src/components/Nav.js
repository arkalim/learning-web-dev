import React from "react";

// for the react router to work, we need to use Link instead of anchors
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/contacts">
                    <li>Contacts</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
