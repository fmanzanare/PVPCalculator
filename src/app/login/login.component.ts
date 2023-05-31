import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

	constructor(private usuarioService: UsuarioService, private router: Router) {}

	ngOnInit(): void {}

	goToSignUp() {
		this.router.navigate(["sign-up"]);
	}

	loginButtonClick() {

		let email = document.getElementById('userInput') as HTMLInputElement
		let passw = document.getElementById('passwInput') as HTMLInputElement

		console.log(email.value);
		console.log(passw.value);
		this.usuarioService.getUserByMail(email.value).subscribe(usuario => {
			console.log(usuario);
			if (usuario.userPassw === passw.value) {
				this.router.navigate(['dashboard']);
			} else {
				alert("El usuario o la contraseña son incorrectos.");
			}
		});

	}
}
