package com.fmanzanare.pvpcalculator.Controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fmanzanare.pvpcalculator.Model.User;
import com.fmanzanare.pvpcalculator.Repository.UserRepository;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController {

	@Autowired
	private UserRepository	repo;

	@GetMapping("/users")
	public List<User> userList() {
		return (repo.findAll());
	}

	@GetMapping("/users/{userEmail}")
	public ResponseEntity<User> getUserByEmail(@PathVariable String userEmail) {
		User user = repo.findById(userEmail).orElse(null);
		return (ResponseEntity.ok(user));
	}

	@PostMapping("/users")
	public User addUser(@RequestBody User user) {
		return (repo.save(user));
	}

}
