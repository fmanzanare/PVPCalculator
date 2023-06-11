package com.fmanzanare.pvpcalculator.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fmanzanare.pvpcalculator.Model.Product;
import com.fmanzanare.pvpcalculator.Repository.ProductRepository;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:4200/")
public class ProductController {

	@Autowired
	private ProductRepository repo;

	@GetMapping("/products")
	public List<Product> productList() {
		return (repo.findAll());
	}

	@GetMapping("/products/{prodId}")
	public ResponseEntity<Product> getProductById(@PathVariable int prodId) {
		Product product = repo.findById(prodId).orElse(null);
		return (ResponseEntity.ok(product));
	}

	@PostMapping("/products")
	public Product addProduct(@RequestBody Product product) {
		return (repo.save(product));
	}

	@DeleteMapping("/products/{prodId}")
	public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable int prodId) {
		Product product = repo.findById(prodId).orElse(null);
		repo.delete(product);
		Map<String, Boolean> answer = new HashMap<>();
		answer.put("borrar", Boolean.TRUE);
		return (ResponseEntity.ok(answer));
	}

}
