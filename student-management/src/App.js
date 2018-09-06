import React, { Component } from 'react';
import './App.css';
import TeacherHome from './StudentManagement/TeacherHome';
import AddNewStudent from './StudentManagement/AddNewStudent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListOfStudents from "./StudentManagement/ListOfStudents";

class App extends Component {
  render() 
  {
    return(
      <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={TeacherHome}/>     
            <Route exact path='/ListOfStudents' component={ListOfStudents} />
            <Route exact path='/AddNewStudent' component={AddNewStudent} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}
export default App;


/*

 return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome To Student Management System</h1>
        </header>  
      <Login></Login>
      <Router>
        <div>
          <ul> 
            <Link to = "/">Home</Link> <br/>
            <Link to = "/Registration">Registration</Link>
          </ul>
          <Switch>     
            <Route exact path='/Registration' component={Registration} />
          </Switch>
        </div>
      </Router>
      <TeacherHome></TeacherHome>
      <AddNewStudent></AddNewStudent>
      <footer className="App-Footer">
        <h6>This is a student management System site</h6>
      </footer>
      </div>
    );

*/