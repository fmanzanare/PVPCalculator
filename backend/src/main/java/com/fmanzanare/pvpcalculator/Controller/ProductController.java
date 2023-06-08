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

}
