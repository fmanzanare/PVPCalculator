import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

	private baseURL = "http://localhost:8080/products"

	constructor(private httpClient: HttpClient) {}

	getProductsList(): Observable<Product[]> {
		return (this.httpClient.get<Product[]>(`${this.baseURL}`));
	}

	getProductById(prodId: number): Observable<Product> {
		return (this.httpClient.get<Product>(`${this.baseURL}/${prodId}`));
	}

	addProduct(product: Product): Observable<Object> {
		return (this.httpClient.post(`${this.baseURL}`, product));
	}

	deleteProduct(prodId: number): Observable<Object> {
		return (this.httpClient.delete(`${this.baseURL}/${prodId}`));
	}

}
