package com.example.demo;


public class Student 
{
	private String firstName,lastName,Standard,division,AddressLine1,AddressLine2;
	private int pincode;
	public String getFirstName() 
	{
		return firstName;
	}
	public void setFirstName(String fname) 
	{
		this.firstName = fname;
	}
	public String getLastName() 
	{
		return lastName;
	}
	public void setLastName(String lname) 
	{
		this.lastName = lname;
	}
	public String getAddressLine1() 
	{
		return AddressLine1;
	}
	public void setAddressLine1(String address1) 
	{
		this.AddressLine1=address1;
	}
	public String getAddressLine2() 
	{
		return AddressLine2;
	}
	public void setAddressLine2(String address2) 
	{
		this.AddressLine2 = address2;
	}
	public String getStandard() 
	{
		return Standard;
	}
	public void setStandard(String standard) 
	{
		this.Standard = standard;
	}
	public String getDivision() 
	{
		return division;
	}
	public void setDivision(String division) 
	{
		this.division = division;
	}
	public int getPincode()
	{
		return pincode;
	}
	public void setPincode(int pincode)
	{
		this.pincode=pincode;
	}
	 public String toString()
	 {
	    StringBuilder builder = new StringBuilder();
	    builder.append(this.getFirstName()).append(", ").append(this.getLastName()).append(", ")
		    .append(this.getStandard()).append(", ").append(this.getDivision()).append(", ")
		    .append(this.getAddressLine1()).append(",").append(this.getAddressLine2()).append(",")
		    .append(this.getPincode());
	    return builder.toString();
	 }
}
