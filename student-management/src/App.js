import React, { Component } from 'react';
<<<<<<< HEAD
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

import Registration from './StudentManagement/Registration.js'
//import DemoForm from './StudentManagement/FormDemo.js'
import Login from './StudentManagement/LoginPage.js'
//import Form from './StudentManagement/Register.js'
import './App.css';
import TeacherHome from './StudentManagement/TeacherHome';
import AddNewStudent from './StudentManagement/AddNewStudent';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListOfStudents from "./StudentManagement/ListOfStudents";
=======
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

import Registration from './StudentManagement/Registration.js'
import './App.css';
>>>>>>> 9ab27f1650abaa0456ac6f1422b26b5ca0476bc6

class App extends Component {
  render() 
  {
    return(
      <div className="App">
<<<<<<< HEAD
{/* <<<<<<< HEAD
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={TeacherHome}/>     
            <Route exact path='/ListOfStudents' component={ListOfStudents} />
            <Route exact path='/AddNewStudent' component={AddNewStudent} />
          </Switch>
        </div>
      </Router>
======= */}
=======
>>>>>>> 9ab27f1650abaa0456ac6f1422b26b5ca0476bc6
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
<<<<<<< HEAD
        <Switch>
            <Route exact  path='/Register' component={Registration} />
            <Route exact path='/TeacherHome' component={TeacherHome}/>
            <Route exact path='/ListOfStudents' component={ListOfStudents} />
            <Route exact path='/AddNewStudent' component={AddNewStudent} />
        </Switch>
      </div>
      </Router>
=======
        <Switch>     
          <Route exact path='/Registration' component={Registration} />
        </Switch>
>>>>>>> 9ab27f1650abaa0456ac6f1422b26b5ca0476bc6
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