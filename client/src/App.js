import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Login from './User_App/log_in';
import SignUp from './User_App/sign_up';
import Users from './User_App/users'
import { PrivateRoute } from "./User_App/privateRoute";

function App() {
  return (
    <div className="App">
      <h1>User app</h1>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={SignUp} />
      <PrivateRoute path="/users" component={Users} />
    </div>
  );
}

export default App;