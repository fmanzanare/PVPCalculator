import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

	newProd: Product = new Product()
	products: Product[] = []

	constructor(
		private productService: ProductService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.getProductsList();
	}

	private getProductsList() {
		this.productService.getProductsList().subscribe( dato => {
			this.products = dato;
		})
		// Función para ordenar la lista alfabéticamente (NO ESTÁ FUNCIONANDO...)
		this.products = this.products.sort((a, b) => (
			a.prodName.charCodeAt(0) - b.prodName.charCodeAt(0)
		));
	}

	addProduct() {
		this.productService.addProduct(this.newProd).subscribe ( data => {
			this.getProductsList();
		})
	}

	onSubmit() {
		let input = document.getElementById('prodName') as HTMLInputElement;

		if (input.value != "") {
			this.addProduct();
		} else {
			alert("Es necesario indicar un nombre de producto");
		}

		input.value = "";
	}

}
