import React, { useEffect, useState } from "react";
import axiosWithAuth from './AuthAxios'

const Users = () => {
    const [ userList, setUserList ] = useState([])


    useEffect(() => {
        axiosWithAuth().get("http://localhost:4500/api/users")
            .then(res => {
                setUserList(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <h1 className='intro'>Welcome to the Users Page.</h1>
            <div className='userdiv'>
                {userList.map(user => (
                    <div className='usersdisplay' key={user.id}>
                        <h3><i className='name'>User-Name:</i>{user.username}</h3>
                        <p ><i className='name'>Department:</i>{user.department}</p>
                    </div>
                ))}
            </div>
        </div>
        );
}

export default Users; 