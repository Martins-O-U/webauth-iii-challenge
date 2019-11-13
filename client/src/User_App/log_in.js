import React, { useState } from "react";
import axios from "axios";

const Login = props => {
    const [ returningUser, setReturningUser ] = useState({ username: "", password: ""})

    const handleChange = e => {
        const { name, value } = e.target;
        setReturningUser({...returningUser, [name]: value})
        console.log(returningUser);
    }

    const submitReturningUser = (e, creds) => {
        e.preventDefault();
        axios.post("http://localhost:4500/api/login", creds)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                props.history.push("/users")
            })
            .catch(err => {
                console.log("oops", err)
            })
    }

    return (
        <div>
            <h1>Just your friendly neighborhood login page</h1>
            <form onSubmit={(e) => submitReturningUser(e, returningUser)}>
                <label>
                    Username: 
                    <input 
                        name="username"
                        value={returningUser.username}
                        onChange={handleChange}
                    />
                    </label>
                <label>
                    Password: 
                    <input 
                        name="password"
                        value={returningUser.password}
                        onChange={handleChange}
                    />
                </label>
                <button>Sign in!</button>
            </form>
        </div>
    );
}

export default Login; 