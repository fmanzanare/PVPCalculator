import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { PurchaseRecord } from '../purchase-record';
import { PurchaseRecordService } from '../purchase-record.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

	newProd: Product = new Product()
	products: Product[] = []
	purchaseRecords: PurchaseRecord[] = []

	constructor(
		private productService: ProductService,
		private purchaseRecordService: PurchaseRecordService,
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

	getPurchaseRecordsList() {
		this.purchaseRecordService.getPurchaseRecordsList().subscribe ( data => {
			this.purchaseRecords = data;
		}, error => console.log(error));
	}

	deleteOnClick(prodId: number) {
		let flag = confirm("Si borra el producto, se eliminarán todas las compras asociadas.\n¿Desea continuar?");

		if (flag) {
			this.productService.deleteProduct(prodId).subscribe( data => {
				this.getProductsList();
			})
		}
	}

}
