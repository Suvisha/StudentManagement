import React,{Component} from 'react'

export default class Registration extends Component{
    render(){
        return(
            <div className = "RegistrationPage">
                 <form>
                    <label> First Name: </label>
                    <input id="name" type="text"  placeholder="First Name" />
                    <br/>
                    <label> Last Name: </label>
                    <input id="email" type="text" placeholder="Email"  />
                    <br/>
                    <label> User Name: </label>
                    <input id="userName" type="text" placeholder="User Name" />
                    <br/>
                    <label>Password:</label>
                    <input id="password" type="password" placeholder="New password" />
                    <br/>
                    <label>Confirm Password:  </label>
                    <input id="confirmPass" type="password" placeholder="Re-write password"  />
                    <br />
                    <button  value="submit" onClick={this.props.onSubmitClick}>Submit</button>
                </form>

            </div>
        )
    }
}