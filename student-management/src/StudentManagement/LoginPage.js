import React from 'react';

<<<<<<< HEAD
export default class Login extends Component{
    constructor(props){
        super(props);
        this.onLoginClick = this.onLoginClick.bind(this);
        this.onSignUpClick = this.onSignUpClick.bind(this);
=======
export default class Login extends React.Component{
    constructor(props)
    {
      super(props);
      this.onLoginClick=this.onLoginClick.bind(this);
>>>>>>> 9c97cdaf7c66bbb96fe931aba06ce0c5da369b52
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
                    <button onClick={this.onLoginClick}>Login</button><br/><br/>
                    <a href="/"> Home </a><br/><br/>
                    <a href="/Registration">Registration</a>
        </div>
        )
    }
    onLoginClick()
    {
<<<<<<< HEAD
        this.props.hi
=======
        this.props.history.push("/TeacherHome")
        
>>>>>>> 9c97cdaf7c66bbb96fe931aba06ce0c5da369b52
    }
    onSignUpClick()
    {
        this.props.history.push("/Registration")
    }
}