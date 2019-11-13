import React, { useState } from "react";
import axios from "axios";


const SignIn = props => {
    const [ newUser, setNewUser ] = useState({ username: "", password: "", department: ""})

    const handleChange = e => {
        const {name, value} = e.target;
        setNewUser({...newUser, [name]: value})
    }

    const handleSubmit = (e, newb)=> {
        e.preventDefault();
        console.log("Yay!!!")
        axios.post("http://localhost:2468/api/register", newb)
            .then(res => {
                props.history.push("/login")
            })
    }

    return (
        <div>
            <h1>Register page</h1>
            <form onSubmit={e => handleSubmit(e, newUser)}>
                <label> 
                    Name: 
                    <input 
                        name="username"
                        value={newUser.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password: 
                    <input 
                        name="password"
                        value={newUser.password}
                        onChange={handleChange}
                    />
                    </label>
                <label>
                    Department: 
                    <input 
                        name="department"
                        value={newUser.department}
                        onChange={handleChange}
                    />
                    </label>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default SignIn; 