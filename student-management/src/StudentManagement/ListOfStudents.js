import React from 'react';
import EditLink from './EditLink';
import DeleteLink from './DeleteLink';

class ListOfStudents extends React.Component
{
     
    render()
    {
        return( 
            <div> <EditLink> </EditLink> <DeleteLink></DeleteLink></div>
        );
    }
}
export default ListOfStudents;