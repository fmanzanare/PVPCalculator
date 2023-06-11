package com.fmanzanare.pvpcalculator.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fmanzanare.pvpcalculator.Model.Recipe;
import com.fmanzanare.pvpcalculator.Repository.RecipeRepository;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:4200/")
public class RecipeController {

	@Autowired
	private RecipeRepository repo;

	@GetMapping("/recipes")
	public List<Recipe> recipeList() {
		return (repo.findAll());
	}

	@PostMapping("/recipes")
	public Recipe addRecipe(@RequestBody Recipe recipe) {
		return (repo.save(recipe));
	}

}
