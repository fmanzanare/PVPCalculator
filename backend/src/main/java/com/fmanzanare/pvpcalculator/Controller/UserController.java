package com.fmanzanare.pvpcalculator.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fmanzanare.pvpcalculator.Model.User;
import com.fmanzanare.pvpcalculator.Repository.UserRepository;

@RestController
@RequestMapping
// @CrossOrigin(origins = "http://localhost:4200/")
public class UserController {

	@Autowired
	private UserRepository	repo;

	@GetMapping("/users")
	public List<User> userList() {
		return (repo.findAll());
	}

}
