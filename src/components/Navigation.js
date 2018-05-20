import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () =>
    <div className="navbar">
        <div className="navbar__logo">
            Task.io
        </div>
        <ul className="navbar__links">
            <li>
                <Link
                    to="/home"
                    className="link__item"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="/auth"
                    className="link__item"
                >
                    Auth
                </Link>
            </li>
        </ul>
    </div>

export default Navigation;
