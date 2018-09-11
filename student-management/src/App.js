import React, { Component } from 'react';
<<<<<<< HEAD
import {BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom'

import Registration from './StudentManagement/Registration.js'
import Login from './StudentManagement/LoginPage.js'
import TeacherHome  from './StudentManagement/TeacherHome.js'
import ListOfStudents from './StudentManagement/ListOfStudents'
=======
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Registration from './StudentManagement/Registration.js'
import Login from './StudentManagement/LoginPage'
import TeacherHome from './StudentManagement/TeacherHome'
import ListOfStudents from './StudentManagement/ListOfStudents'
import AddNewStudent from './StudentManagement/AddNewStudent'
import EditStudent from './StudentManagement/EditStudent'
import DeleteStudent from './StudentManagement/DeleteStudent'
>>>>>>> 9c97cdaf7c66bbb96fe931aba06ce0c5da369b52
import './App.css';

class App extends Component {
  render() 
  {
    return(
      <div className="App">
<<<<<<< HEAD
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
          <Route exact path='/ListOfStudents' component={Registration} />
        </Switch>
      </div>
    </Router>
=======
        <header className="App-header">
          <h1 className="App-title">Welcome To Student Management System</h1>
        </header>  
        <Router>
          <div>
            <Switch>   
              <Route exact path='/' component={Login} />   
              <Route exact path='/Registration' component={Registration} />
              <Route exact path='/TeacherHome' component={TeacherHome}/>     
              <Route exact path='/ListOfStudents' component={ListOfStudents} />
              <Route exact path='/AddNewStudent' component={AddNewStudent} />
              <Route exact path="/ListOfStudents/EditStudent" component={EditStudent}/>
              <Route exact path="/ListOfStudents/DeleteStudent" component={DeleteStudent}/>
            </Switch>
          </div>
        </Router>
        <footer className="App-Footer">
          <h6>Copyright © 2018 StudentManagement , Inc. All rights reserved.</h6>
        </footer>
>>>>>>> 9c97cdaf7c66bbb96fe931aba06ce0c5da369b52
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