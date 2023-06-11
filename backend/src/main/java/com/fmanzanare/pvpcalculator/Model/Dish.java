package com.fmanzanare.pvpcalculator.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "dishes")
public class Dish {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "dish_id")
	private int		dishId;

	@Column(name = "dish_name", length = 100, nullable = false)
	private String	dishName;

	@Column(name = "dish_cost")
	private float	dishCost;

	@Column(name = "dish_margin")
	private float	dishMargin;

	@Column(name = "dish_final_price")
	private float	dishFinalPrice;

	// * GETTERS
	public int getDishId() {
		return dishId;
	}

	public String getDishName() {
		return dishName;
	}

	public float getDishCost() {
		return dishCost;
	}

	public float getDishMargin() {
		return dishMargin;
	}

	public float getDishFinalPrice() {
		return dishFinalPrice;
	}

	// * SETTERS
	public void setDishId(int dishId) {
		this.dishId = dishId;
	}

	public void setDishName(String dishName) {
		this.dishName = dishName;
	}

	public void setDishCost(float dishCost) {
		this.dishCost = dishCost;
	}

	public void setDishMargin(float dishMargin) {
		this.dishMargin = dishMargin;
	}

	public void setDishFinalPrice(float dishFinalPrice) {
		this.dishFinalPrice = dishFinalPrice;
	}

}
