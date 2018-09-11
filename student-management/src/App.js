import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

import Registration from './StudentManagement/Registration.js'
import './App.css';

class App extends Component {
  render() 
  {
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