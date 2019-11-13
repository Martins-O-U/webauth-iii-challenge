import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {

    useEffect(() => {
        axios.get("http://localhost:4500/api/users")
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>This is users page.</h1> 
        </div>
        );
}

export default Users; 