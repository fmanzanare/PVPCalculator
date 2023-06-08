package com.fmanzanare.pvpcalculator.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fmanzanare.pvpcalculator.Model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {}
