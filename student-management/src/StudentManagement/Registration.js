import React,{Component} from 'react'

export default class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {
            FirstName:"",
            LastName:"",
            userNm:"",
            passWord:"",
            fields:{},
            errors:{}
        }
    }
    onSubmitClick=()=>{
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        /*if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }*/

       
        const First_name = document.getElementById("name").value;
        if(First_name !== ""){
            if(First_name.match(/^[a-zA-Z]+$/)){
                this.setState({FirstName : First_name})        
            }  
            else{
                formIsValid = false;
               errors[First_name] = "Only letters";
            }
         }
        
        const last_name = document.getElementById("lastName").value;
        if(last_name !== ""){
            if(last_name.match(/^[a-zA-Z]+$/)){
                this.setState({LastName : last_name})
            }  
            else{
                formIsValid = false;
                errors[last_name] = "Only letters";
            }
         }
       
        const userNm = document.getElementById("userName").value;
        this.setState({userNm:userNm });
        const passWord = document.getElementById("password").value;
        if(passWord.size < 6){
            errors[passWord] = "password must be at least 6 digits";
             alert(passWord.size())
        }
       
        this.setState({passWord:passWord });
        alert(`${this.state.FirstName} ${last_name}, registered succesfully`)

        this.setState({errors: errors});
        return formIsValid;
        
        /*if(First_name ==="" || last_name==="" || userNm===""||passWord===""){
            alert("please fill all he information")
        }
        else{
            alert(`${First_name} ${last_name}, registered succesfully`)
        }*/

    }
   /* contactSubmit(e){
        alert("submit")
    }
    handleChange(field,e){
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }*/
    render(){
        return(
            <div className = "RegistrationPage">
                 <form>
                    <label>First Name: </label>
                    <input id="name" type="text" size="30" placeholder="First Name" required="true" value={this.state.fields["name"]} />
                    <br/>
                    <label>Last Name: </label>
                    <input id="lastName" type="text" size="30" placeholder="last name" required="true" />
                    <br/>
                    <label>User Name:</label>
                    <input id="userName" type="text" size="30" placeholder="User Name" required="true"/>
                    <br/>
                    <label>Password  :   </label>
                    <input id="password" type="password" size="30" placeholder="New password"required="true" />
                    <br/>
                    <label>Confirm Password:</label>
                    <input id="confirmPass" type="password" size="30" placeholder="Re-write password" required="true" />
                    <br />
                    <button  value="submit" onClick={this.onSubmitClick}>Submit</button>
                </form>
            </div>
        )
    }
}