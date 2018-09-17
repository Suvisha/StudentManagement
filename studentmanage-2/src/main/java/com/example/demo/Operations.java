package com.example.demo;

import java.util.List;
import javax.sql.DataSource;

public interface Operations 
{
	public void setDataSource(DataSource ds);
    public void createStudent(Student student);
    public List<Student> getStudents();
    public Student findStudentById(int id);
    public void updateStudent(Student student, int id);
    public void deleteStudent(int id);
}
