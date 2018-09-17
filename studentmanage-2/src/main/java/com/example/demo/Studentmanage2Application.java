package com.example.demo;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Studentmanage2Application {

	public static void main(String[] args) {
		 SpringApplication app = new SpringApplication(Studentmanage2Application.class);
	        app.setDefaultProperties(Collections.singletonMap("server.port", "8088"));
	        app.run(args);
	}
}

