import React from 'react';
import Button from "./Button";
import Home from "./Home";
import '../App.css';

class TeacherHome extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state={Teachername:""};
      this.handleListOfStudents=this.handleListOfStudents.bind(this);
      this.handleNewStudent=this.handleNewStudent.bind(this);
    }
    render()
    {
        return(
            <div className="col-75 ">
                <div className="right">  
                    <h2> Name:.... {this.props.Teachername} </h2>
                </div>
                <div className="center">
                    <Home/>
                </div>   
                <form>
                    <Button handleOnClick={this.handleListOfStudents} buttonName="List Of Students"> </Button>
                    <Button handleOnClick={this.handleNewStudent} buttonName="Add New Students"> </Button>
                </form>
            </div>
        );
    }
    handleListOfStudents()
    {  
        console.log("In  List of Student" );
        return(
           this.props.history.push("/ListOfStudents")
        );
    }
    handleNewStudent()
    {
        console.log("In  Add new Student" );
        return(
           this.props.history.push("/AddNewStudent")
        );
    }
}
export default TeacherHome;