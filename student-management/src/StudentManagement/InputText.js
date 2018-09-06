import React from "react";

class InputText extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
                   fields:{ placeholder:"",FirstName:"",onChange:"",
                        LastName:"",Class:"",
                        Division:"",AddressLine1:"",
                        AddressLine2:"",pincode:"",value:""},
                   errors:{ }
                };
        this.handleonChange=this.handleonChange.bind(this);
        this.handleValidation=this.handleValidation.bind(this);
        this.handleAddressLine1Change=this.handleAddressLine1Change.bind(this);
        this.handleAddressLine2Change=this.handleAddressLine2Change.bind(this);
        this.handleClassChange=this.handleClassChange.bind(this);
        this.handleDivisionChange=this.handleDivisionChange.bind(this);
        this.handlePincodeChange=this.handlePincodeChange.bind(this);
        this.handleFirstNameChange=this.handleFirstNameChange.bind(this);
        this.handleLastNameChange=this.handleLastNameChange.bind(this);
    }
    
    handleValidation()
    {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if(!fields["name"])
        {
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }
        if(typeof fields["name"] !== "undefined")
        {
           if(!fields["name"].match(/^[a-zA-Z]+$/))
           {
              formIsValid = false;
              errors["name"] = "Only letters";
           }        
        }
       this.setState({errors: errors});
       return formIsValid;
   } 
    handleChange(field, e)
    {
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
    render()
    {   
        return(
           <div>
               <input ref="name" type="text" placeholder={this.props.placeholder} onChange={this.handleonChange} value={this.state.value} ></input>
               <span style={{color: "red"}}>{this.state.errors["name"]}</span>      
           </div>    
        );          
    }
    
    handleonChange(e)
    {  
        if(this.props.placeholder==="First Name")
        {
            this.setState({onChange:e.handleFirstNameChange});
            console.log("in fisrt");
        }
        
        else if(this.props.placeholder==="Last Name")
        {
            this.setState({onChange:e.handleLastNameChange});
        }
        else if(this.props.placeholder==="Class")
        {
            this.setState({onChange:e.handleClassChange});
        }
        else if(this.props.placeholder==="Division")
        {
            this.setState({onChange:e.handleDivisionChange});
        }
        else if(this.props.placeholder==="Address Line1")
        {
            this.setState({onChange:e.handleAddressLine1Change});
        }
        else if(this.props.placeholder==="Address Line2")
        {
            this.setState({onChange:e.handleAddressLine2Change});
        }
        else if(this.props.placeholder==="PIN code")
        {
            this.setState({onChange:e.handlePincodeChange});
        } 
    }
}
export default InputText;