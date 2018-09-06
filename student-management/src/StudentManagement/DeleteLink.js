import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import DeleteStudent from "./DeleteStudent";

class DeleteLink extends React.Component
{
    render()
    {
        return(
                <div>
                   <Router>
                    <div>
                    <ul> 
                        <Link to="/ListOfStudents/DeleteStudent"> Delete </Link>
                    </ul>
                    <switch>
                        <Route exact path="/ListOfStudents/DeleteStudent" component={DeleteStudent}/>
                    </switch>
                    </div>
                    </Router>
                </div>
        );
    }
}
export default DeleteLink;