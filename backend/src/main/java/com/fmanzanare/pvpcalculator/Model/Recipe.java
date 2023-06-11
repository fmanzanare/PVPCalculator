package com.fmanzanare.pvpcalculator.Model;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "recipes")
public class Recipe {

	@EmbeddedId
	private RecipeId recipeId;

	@Column(name = "recipe_prod_quantity")
	private float	recipeProdQuantity;

	@Column(name = "recipe_prod_cost")
	private float	recipeProdCost;

	// * GETTERS
	public RecipeId getRecipeId() {
		return recipeId;
	}

	public float getRecipeProdQuantity() {
		return recipeProdQuantity;
	}

	public float getRecipeProdCost() {
		return recipeProdCost;
	}

	// * SETTERS
	public void setRecipeId(RecipeId recipeId) {
		this.recipeId = recipeId;
	}

	public void setRecipeProdQuantity(float recipeProdQuantity) {
		this.recipeProdQuantity = recipeProdQuantity;
	}

	public void setRecipeProdCost(float recipeProdCost) {
		this.recipeProdCost = recipeProdCost;
	}



}
