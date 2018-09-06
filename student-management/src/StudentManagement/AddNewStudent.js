import React from 'react';
import InputBox from './InputBox';
import Button from './Button';
import '../App.css';

class AddNewStudent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={FirstName:" ",LastName:" ",Class:" ",
                    Division:" ",AddressLine1:" ",
                    AddressLine2:" ",pincode:""
                    }
        this.handleAddStudent=this.handleAddStudent.bind(this);
        this.handleFirstNameChange=this.handleFirstNameChange.bind(this);
        this.handleLastNameChange=this.handleLastNameChange.bind(this);
        this.handleClassChange=this.handleClassChange.bind(this);
        this.handleDivisionChange=this.handleDivisionChange.bind(this);
        this.handleAddressLine1Change=this.handleAddressLine1Change.bind(this);
        this.handleAddressLine2Change=this.handleAddressLine2Change.bind(this); 
        this.handlePincodeChange=this.handlePincodeChange.bind(this);
    }
    handleFirstNameChange(value)
    {
        this.setState({FirstName: value});
    }
    handleLastNameChange(value)
    {
        this.setState({LastName: value});
    }
    handleClassChange(value)
    {
        this.setState({Class: value});
    }
    handleDivisionChange(value)
    {
        this.setState({Division: value});
    }
    handleAddressLine1Change(value)
    {
        this.setState({AddressLine1: value});
    }
    handleAddressLine2Change(value)
    {
        this.setState({AddressLine2: value});
    }
    handlePincodeChange(value)
    {
        this.setState({pincode: value});
    }
    render()
    {
        return(
            <div className="col-75 ">
                <div className="center">
                    <form>
                        <InputBox inputType="text"  placeholder="First Name"    handleChanges={this.handleFirstNameChange}    Name="firstName"    >
                        </InputBox><br></br> 
                        <InputBox inputType="text"  placeholder="Last Name"     handleChanges={this.handleLastNameChange}     Name="lastName"     >
                        </InputBox><br></br>           
                        <InputBox inputType="text"  placeholder="Class"         handleChanges={this.handleClassChange}        Name="class"        >
                        </InputBox><br></br>           
                        <InputBox inputType="text"  placeholder="Division"      handleChanges={this.handleDivisionChange}     Name="division"     >
                        </InputBox><br></br>           
                        <InputBox inputType="text"  placeholder="Address Line1" handleChanges={this.handleAddressLine1Change} Name="addressLine1" >
                        </InputBox><br></br>           
                        <InputBox inputType="text"  placeholder="Address Line2" handleChanges={this.handleAddressLine2Change} Name="addressLine2" >
                        </InputBox><br></br>           
                        <InputBox inputType="text"  placeholder="PIN code"      handleChanges={this.handlePincodeChange}      Name="pincode"      >
                        </InputBox><br></br>           
                        <Button buttonName="Add Student" handleOnClick={this.handleAddStudent} />
                    </form>
                </div>
            </div>
        );
    }
    handleAddStudent()
    {
        if(this.state.FirstName)
        alert("Added "+ this.state.FirstName);
    }
}
export default AddNewStudent;