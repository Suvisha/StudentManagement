package com.example.demo;

import java.util.List;
import javax.sql.DataSource;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

public class StudentJDBCTemplate
{
	private DataSource dataSource;
	private JdbcTemplate jdbcTemplateObject; 
	
	public void setDataSource(DataSource ds) 
	{
      dataSource = ds;
      this.jdbcTemplateObject = new JdbcTemplate(dataSource);
	}
	
   @RequestMapping(value = "/ListOfStudent", method = RequestMethod.GET, produces = "application/json")
   public List<Student> getStudents() 
   {
      String SQL = "select * from Student";
      List <Student> students = jdbcTemplateObject.query(SQL, new StudentInformation());
      return students;
   }
   
   @RequestMapping(value = "/EditStudent", method = RequestMethod.GET, produces = "application/json")
   public Student findStudentById(int id) 
   {
      String SQL = "select * from Student where id = ?";
      Student student = jdbcTemplateObject.queryForObject(SQL, 
         new Object[]{id}, new StudentInformation());
      return student;
   }
   
   public void updateStudent(Student student, int id)
   {
      String SQL = "update Student set age = ? where id = ?";
      jdbcTemplateObject.update(SQL, student, id);
      System.out.println("Updated Record with ID = " + id );
      return;
   }
   @RequestMapping(value = "/DelectStudent", method = RequestMethod.DELETE, produces = "application/json")
   public void deleteStudent(int id) 
   {
      String SQL = "delete from Student where id = ?";
      jdbcTemplateObject.update(SQL, id);
      System.out.println("Deleted Record with ID = " + id );
      return;
   }
   @RequestMapping(value="/AddStudent", method = RequestMethod.POST, produces="application/json")
   public void createStudent(Student student)
   {
	   
   }
}

