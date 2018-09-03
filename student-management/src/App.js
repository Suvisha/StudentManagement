import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

import Registration from './StudentManagement/Registration.js'
import Login from './StudentManagement/LoginPage.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-Header">
      <h1 className="App-title">Welcome To Student Management System</h1>
      </header>  
     
      <Login></Login>
    <Router>
      <div>
        <ul> 
        <li> <Link to = "/">Home</Link></li>
        <li> <Link to = "/Registration">Registration</Link></li>
        </ul>
        <switch>
        <Route exact path='/Registration' component={Registration} />
        </switch>
      </div>
    </Router>



     <footer className="App-Footer">
      <h6>This is a student management System site</h6>
      </footer>
    </div>
    );
  }
}

export default App;