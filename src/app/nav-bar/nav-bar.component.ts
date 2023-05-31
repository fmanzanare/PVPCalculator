import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

	private loginFlag: number;

	constructor(private router: Router) {
		this.loginFlag = 0;
	}

	ngOnInit(): void {
		let login = document.getElementById("login") as HTMLButtonElement

		this.loginFlag = 0;
		login.style.display = "none"
		this.router.navigateByUrl('/login');
	}

	onSubmit() {
		let login = document.getElementById("login") as HTMLButtonElement
		let signUp = document.getElementById("sign-up") as HTMLButtonElement

		if (this.loginFlag)
		{
			login.style.display = "none";
			signUp.style.display = "block";
			this.loginFlag = 0;
			this.router.navigateByUrl('/login');
		}
		else
		{
			login.style.display = "block";
			signUp.style.display = "none";
			this.loginFlag = 1;
			this.router.navigateByUrl('/sign-up');
		}
	}
}
