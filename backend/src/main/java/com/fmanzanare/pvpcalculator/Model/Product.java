package com.fmanzanare.pvpcalculator.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "prod_id")
	private int		prodId;

	@Column(name = "prod_name", length = 60, nullable = false)
	private String	prodName;

	@Column(name = "prod_quantity")
	private float	prodQuantity;

	@Column(name = "prod_wap")
	private float	prodWAP;

	// * GETTERS
	public int getProdId() {
		return prodId;
	}

	public String getProdName() {
		return prodName;
	}

	public float getProdQuantity() {
		return prodQuantity;
	}

	public float getProdWAP() {
		return prodWAP;
	}

	// * SETTERS:
	public void setProdId(int prodId) {
		this.prodId = prodId;
	}

	public void setProdName(String prodName) {
		this.prodName = prodName;
	}

	public void setProdQuantity(float prodQuantity) {
		this.prodQuantity = prodQuantity;
	}

	public void setProdWAP(float prodWAP) {
		this.prodWAP = prodWAP;
	}

}
