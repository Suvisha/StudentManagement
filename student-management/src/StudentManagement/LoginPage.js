import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'


export default class Login extends React.Component{
    constructor(props)
    {
      super(props);
      this.onLoginClick=this.onLoginClick.bind(this);
    }
    render()
    {
        return(
        <div className="LoginPage">
                    <label>User Name:</label>
                    <input id="userName" type="text"  placeholder="User Name"></input>
                     <br/>
                    <label>Password:</label>
                    <input id="password" type="password" placeholder="New password"></input>
                    <br/>
                    <button onClick={this.onLoginClick}>Login</button>
                    <button onClick={this.onSignUpClick}>Sign Up</button>
        </div>
        )
    }
    onLoginClick()
    {
        alert(1);
        this.props.history.push("/ListOfStudents")
        
    }
    onSignUpClick()
    {
        alert("in SignUp");
    }
}