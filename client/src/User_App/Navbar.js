import React from "react";
import { Link} from "react-router-dom";

const Nav = () => {
    const onLogout = () => {
        localStorage.removeItem("token");
    };

    return (
        <div className='navbar'>
            <div className='home-bar'>
                <Link to="/">Home</Link>                     
            </div>
            <div className ='general-bar'>
                <Link to="/users">Users</Link>           
                <Link to="/login">Log-In</Link>
                <Link to="/register">Sign_Up</Link>
                <Link to="/"><button onClick={onLogout} >Log_Out</button></Link>
            </div>
        </div>
    );
}

export default Nav; 