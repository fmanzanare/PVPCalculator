package com.fmanzanare.pvpcalculator.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fmanzanare.pvpcalculator.Model.User;

public interface UserRepository extends JpaRepository<User, String> {
	Optional<User> findByEmail(String userEmail);

}
