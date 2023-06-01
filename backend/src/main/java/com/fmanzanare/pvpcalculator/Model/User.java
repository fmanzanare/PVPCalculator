package com.fmanzanare.pvpcalculator.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

	@Id
	@Column(name = "user_email", length = 80, nullable = false)
	private String	userEmail;

	@Column(name = "user_name", length = 60, nullable = false)
	private String	userName;

	@Column(name = "user_last_name", length = 100, nullable = false)
	private String	userLastName;

	@Column(name = "user_passw", length = 300, nullable = false)
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
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public void setUserLastName(String userLastName) {
		this.userLastName = userLastName;
	}

	public void setUserPassw(String userPassw) {
		this.userPassw = userPassw;
	}

}
