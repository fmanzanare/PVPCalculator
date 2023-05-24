package com.fmanzanare.pvpcalculator.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

	@Id
	@Column(name = "userEmail", length = 80, nullable = false)
	private String	userEmail;

	@Column(name = "userName", length = 60, nullable = false)
	private String	userName;

	@Column(name = "userLastName", length = 100, nullable = false)
	private String	userLastName;

	@Column(name = "userPassw", length = 300, nullable = false)
	private String	userPassw;

	// * GETTERS
	public String getUserEmail() {
		return (this.userEmail);
	}

	public String getUserName() {
		return (this.userName);
	}

	public String getUserLastName() {
		return (this.userLastName);
	}

	public String getUserPassw() {
		return (this.userPassw);
	}

	// * SETTERS
	public void setUserEmail(String email) {
		this.userEmail = email;
	}

	public void setUserName(String name) {
		this.userName = name;
	}

	public void setUserLastName(String lastName) {
		this.userLastName = lastName;
	}

	public void setUserPassw(String passw) {
		this.userPassw = passw;
	}

}
