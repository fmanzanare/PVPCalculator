import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

	constructor(private router: Router) {}

	ngOnInit(): void {}

	goToLogin() {
		this.router.navigate(["login"]);
	}

}
