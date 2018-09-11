import React,{Component} from 'react';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.onLoginClick = this.onLoginClick.bind(this);
        this.onSignUpClick = this.onSignUpClick.bind(this);
    }
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
        this.props.hi
    }
    onSignUpClick()
    {
        alert("in SignUp");
    }
}