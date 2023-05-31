package com.fmanzanare.pvpcalculator.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fmanzanare.pvpcalculator.Model.User;

public interface UserRepository extends JpaRepository<User, String> {}
