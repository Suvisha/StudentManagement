import React from 'react'

class Student extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.students.firstName}</td>
				<td>{this.props.students.lastName}</td>
                <td>{this.props.students.Class}</td>
				<td>{this.props.students.Division}</td>
                <td>{this.props.students.AddressLine1}</td>
				<td>{this.props.students.AddressLine2}</td>
				<td>{this.props.students.pincode}</td>
			</tr>
		)
	}
}
export default Student;