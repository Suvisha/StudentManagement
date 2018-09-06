import React from 'react';
//import {FormErrors} from './FormErrors.js'

class InputBox extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state={firstNameValid:false,
                    lastNameValid:false,
                    divisionValid: false,
                    addressLine1Valid:false,
                    pincodeValid:false,
                    formErrors:{ firstName:" ",lastName:" ",division:" ",
                                addressLine1:" ",pincode:" "
                                },
                    formValid:false
                    }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.validateField=this.validateField.bind(this);
    };
    handleOnChange(e) 
    {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},() => { this.validateField(name, value) }); 
        this.props.handleChanges(e.target.value);    
    }
    validateField(fieldName,value)
    {
        
        let fieldValidationErrors = this.state.formErrors;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let divisionValid = this.state.divisionValid;
        let addressLine1Valid = this.state.addressLine1Valid;
        let pincodeValid=this.state.pincodeValid;
        switch(fieldName) 
        {
            case 'firstName'    :console.log("In firstname ");
                                firstNameValid=value;
                                if( firstNameValid !== "" && firstNameValid !== value.match(/^[a-zA-Z]+$/) )
                                fieldValidationErrors.firstName = firstNameValid ? '' : ' is invalid format';
                                break;
            case 'lastName'     :console.log("In lastname ");
                                lastNameValid = value.match(/^[a-zA-Z]+$/);
                                fieldValidationErrors.lastName= lastNameValid ? 'is invalid' : ' ';
                                break;
            case 'division'     :console.log("In division ");
                                divisionValid = value.match(/^[a-zA-Z]/);
                                fieldValidationErrors.division = divisionValid ? '': 'only a single a-z / A-Z ';
                                break;
            case 'addressLine1' :console.log("In addressLine1");
                                addressLine1Valid = value.length >= 15;
                                fieldValidationErrors.addressLine1 = addressLine1Valid ? '': ' is too long';
                                break;    
            case 'pincode'      :console.log("In pincode");
                                pincodeValid=value;
                                if(pincodeValid !== value.match(/[\d]/) && pincodeValid !== (value.length >=6) )
                                fieldValidationErrors.pincode=pincodeValid ? '': 'Only 6 digits allowed ';
                                break;           
            default             :break;
        }
        this.setState({
                    formErrors: fieldValidationErrors,
                    firstNameValid:firstNameValid,
                    lastNameValid:lastNameValid,
                    divisionValid: divisionValid,
                    addressLine1Valid:addressLine1Valid,
                    pincodeValid:pincodeValid
                  },this.validateForm);
    }
    validateForm() 
    {
        this.setState({formValid: this.state.firstNameValid && this.state.lastNameValid && this.state.divisionValid && this.state.addressLine1Valid && this.state.pincodeValid});
    }
    errorClass(error) 
    {
        return(error.length === 0 ? ' ' : 'has-error');
    }
    render()
    {
        return(      
                <div >
                    
                    <div className={`form-group ${this.errorClass(this.state.formErrors.firstName||
                                                                  this.state.formErrors.lastName||
                                                                  this.state.formErrors.division||
                                                                  this.state.formErrors.addressLine1||
                                                                  this.state.formErrors.pincode)}`}>
                        <input type = {this.props.inputType} placeholder = {this.props.placeholder} onBlur={this.handleOnChange} name={this.props.Name}  required/>
                    <span { ...this.state.formError} />
                    </div>
               </div>
            );
    }
}
export default InputBox;



// handleOnChange(e) 
//     {
//         this.props.handleChanges(e.target.value);
//     }