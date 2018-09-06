import React,{Component} from 'react';

export default class Login extends Component{
    render()
    {
        return(
        <div className="LoginPage">
            <form>
                    <label>User Name:</label>
                    <input id="userName" type="text"  placeholder="User Name"></input>
                     <br/>
                    <label>Password:</label>
                    <input id="password" type="password" placeholder="New password"></input>
                    <br/>
                    <button value="submit" onClick={this.props.onLoginClick}>Login</button>
                    <button value="submit" onClick={this.props.onSignUpClick}>Sign Up</button>
            </form>
        </div>
        )
    }
    onLoginClick()
    {
        alert("in Login");
    }
    onSignUpClick()
    {
        alert("in SignUp");
    }
}