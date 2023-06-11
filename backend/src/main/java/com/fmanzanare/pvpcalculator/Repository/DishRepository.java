package com.fmanzanare.pvpcalculator.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fmanzanare.pvpcalculator.Model.Dish;

public interface DishRepository extends JpaRepository<Dish, Integer> {}
