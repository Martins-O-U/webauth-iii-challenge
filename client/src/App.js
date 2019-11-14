import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Login from './User_App/log_in';
import SignUp from './User_App/sign_up';
import Users from './User_App/users'
import { PrivateRoute } from "./User_App/privateRoute";
import Nav from './User_App/Navbar';
import Home from './User_App/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={SignUp} />
      <PrivateRoute path="/users" component={Users} />
    </div>
  );
}

export default App;