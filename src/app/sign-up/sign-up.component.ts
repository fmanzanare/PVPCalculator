import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

	user: Usuario = new Usuario()

	constructor(
		private usuarioService: UsuarioService,
		private router: Router
	) {}

	ngOnInit(): void {}

	goToLogin() {
		this.router.navigate(["login"]);
	}

	addUser() {
		this.usuarioService.addUser(this.user).subscribe ( data => {
			this.goToLogin();
		})
	}

	onSubmit() {
		let name = document.getElementById('name') as HTMLInputElement;
		let lastName = document.getElementById('lastName') as HTMLInputElement;
		let email = document.getElementById('email') as HTMLInputElement;
		let passw = document.getElementById('passw') as HTMLInputElement;
		let confPassw = document.getElementById('confPassw') as HTMLInputElement;

		if (name.value === "" || lastName.value === ""
				|| email.value === "" || passw.value === ""
				|| confPassw.value === "") {
					alert("Todos los campos son obligatorios");
					return ;
				}

		if (passw.value != confPassw.value) {
			alert("La contraseña y la verificación no coinciden");
		} else {
			this.addUser();
		}
	}



}
