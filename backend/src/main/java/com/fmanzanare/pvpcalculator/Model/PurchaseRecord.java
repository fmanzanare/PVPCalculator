package com.fmanzanare.pvpcalculator.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "purchase_records")
public class PurchaseRecord {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "rec_id")
	private int		recId;

	@Column(name = "rec_quantity")
	private float	recQuantity;

	@Column(name = "rec_price")
	private float	recPrice;

	@ManyToOne
	@JoinColumn(name = "rec_prod_id")
	private Product	product;


	// * GETTERS
	public int getRecId() {
		return recId;
	}

	public float getRecQuantity() {
		return recQuantity;
	}

	public float getRecPrice() {
		return recPrice;
	}

	public Product getProduct() {
		return this.product;
	}

	// * SETTERS
	public void setRecId(int recId) {
		this.recId = recId;
	}

	public void setRecQuantity(float recQuantity) {
		this.recQuantity = recQuantity;
	}

	public void setRecPrice(float recPrice) {
		this.recPrice = recPrice;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

}
