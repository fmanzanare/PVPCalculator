package com.fmanzanare.pvpcalculator.Model;

import java.io.Serializable;

import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Embeddable
public class RecipeId implements Serializable {

	@ManyToOne
	@JoinColumn(name = "recipe_dish_id")
	private Dish	dish;

	@ManyToOne
	@JoinColumn(name = "recipe_prod_id")
	private Product	product;

	public RecipeId(Dish dish, Product product) {
		this.dish = dish;
		this.product = product;
	}

	// * GETTERS
	public Dish getDish() {
		return dish;
	}

	public Product getProduct() {
		return product;
	}

	// * SETTERS
	public void setDish(Dish dish) {
		this.dish = dish;
	}

	public void setProduct(Product product) {
		this.product = product;
	}



}
