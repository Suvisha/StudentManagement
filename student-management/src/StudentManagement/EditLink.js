import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import EditStudent from "./EditStudent";

class EditLink extends React.Component
{
    render()
    {
        return(
                <div>
                   <Router>
                    <div>
                    <ul> 
                        <Link to="/ListOfStudents/EditStudent"> Edit </Link>
                    </ul>
                    <switch>
                        <Route exact path="/ListOfStudents/EditStudent" component={EditStudent}/>
                    </switch>
                    </div>
                    </Router>
                </div>
        );
    }
}
export default EditLink;