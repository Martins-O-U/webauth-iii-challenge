import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Sign up</Link>
        </div>
    );
}

export default Nav; 