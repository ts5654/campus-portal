// Note: Assuming NavLink is a separate component.
import React from 'react';
import { Link } from 'react-router-dom';

export const NavLink = ({ name, to }) => {
    return (
        <Link to={to} className="text-lg font-medium text-white transition-colors duration-300 hover:text-blue-400">
            {name}
        </Link>
    );
};