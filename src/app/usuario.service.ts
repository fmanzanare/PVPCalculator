import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

	private baseURL = "http://localhost:8080/users"

	constructor(private httpClient: HttpClient) {}

	getUserByMail(email: String): Observable<Usuario> {
		return (this.httpClient.get<Usuario>(`${this.baseURL}/${email}`));
	}

	addUser(user: Usuario): Observable<Object> {
		return (this.httpClient.post(`${this.baseURL}`, user));
	}

}
