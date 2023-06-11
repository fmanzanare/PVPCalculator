package com.fmanzanare.pvpcalculator.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fmanzanare.pvpcalculator.Model.Dish;
import com.fmanzanare.pvpcalculator.Repository.DishRepository;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:4200/")
public class DishController {

	@Autowired
	private DishRepository repo;

	@GetMapping("/dishes")
	public List<Dish> dishList() {
		return (repo.findAll());
	}

	@GetMapping("/dishes/{dishId}")
	public ResponseEntity<Dish> getDishById(@PathVariable int dishId) {
		Dish dish = repo.findById(dishId).orElse(null);
		return (ResponseEntity.ok(dish));
	}

	@PostMapping("/dishes")
	public Dish addDish(@RequestBody Dish dish) {
		return (repo.save(dish));
	}

}
