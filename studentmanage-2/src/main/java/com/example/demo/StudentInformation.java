package com.example.demo;


import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

public class StudentInformation implements RowMapper<Student> 
{
   public Student mapRow(ResultSet rs, int rowNum) throws SQLException 
   {
      Student student = new Student();
      student.setPincode(rs.getInt("701012"));
      student.setFirstName(rs.getString("Fname"));
      student.setLastName(rs.getString("lname"));
      student.setAddressLine1(rs.getString("Address1"));
      student.setAddressLine2(rs.getString("Address2"));
      student.setStandard(rs.getString("10"));
      student.setDivision(rs.getString("A"));
      return student;
   }
}