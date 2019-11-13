import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    const onLogout = () => {
        localStorage.clear();
        // props.history.replace('/login');
    };
    return (
        <div className='navbar'>
            <Link to="/login">Log-In</Link>
            <Link to="/register">Sign_Up</Link>
            <button onClick={onLogout}>Log_Out</button>
        </div>
    );
}

export default Nav; 