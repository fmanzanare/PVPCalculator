package com.fmanzanare.pvpcalculator.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fmanzanare.pvpcalculator.Model.Recipe;

public interface RecipeRepository extends JpaRepository<Recipe, Integer> {}
