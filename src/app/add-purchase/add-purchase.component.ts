import { Component, OnInit } from '@angular/core';
import { PurchaseRecord } from '../purchase-record';
import { Product } from '../product';
import { PurchaseRecordService } from '../purchase-record.service';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {

	purchaseRecord: PurchaseRecord = new PurchaseRecord();
	products: Product[] = [];
	purchaseRecords: PurchaseRecord[] = [];
	newRecord = new PurchaseRecord();

	constructor (
		private purchaseRecordService: PurchaseRecordService,
		private productService: ProductService,
		private router: Router
	) {};

	ngOnInit(): void {

		let product = document.getElementById('product') as HTMLSelectElement
		let submit = document.getElementById('submit') as HTMLButtonElement
		let update = document.getElementById('update') as HTMLButtonElement

		this.productService.getProductsList().subscribe (
			(products: Product[]) => {
				this.products = products
			}, error => console.log(error)
		);

		this.purchaseRecordService.getPurchaseRecordsList().subscribe( data => {
			this.purchaseRecords = data
		}, error => console.log(error));

		update.style.display = "none"
		submit.style.display = "inline";
		product.style.display = "inline";
	}

	addPurchaseRecord() {
		this.purchaseRecordService.addPurchaseRecord(this.purchaseRecord).subscribe( data => {
			this.getPurchaseRecordsList()
		}, error => console.log(error));
	}

	getPurchaseRecordsList() {
		this.purchaseRecordService.getPurchaseRecordsList().subscribe( data => {
			this.purchaseRecords = data;
		})
	}

	onSubmit() {
		let product = document.getElementById('product') as HTMLSelectElement
		let quantity = document.getElementById('quantity') as HTMLInputElement
		let price = document.getElementById('price') as HTMLInputElement

		if (product.selectedIndex == 0 || quantity.value == "" || price.value == "") {
			alert("Es necesario seleccionar un producto y rellenar todos los campos");
		} else {
			this.addPurchaseRecord();
			product.selectedIndex = 0;
			quantity.value = "";
			price.value = ""
		}
	}

	deleteOnClick(recId: number) {
		let flag = confirm("¿Está seguro que desea eliminar este registro?");

		if (flag) {
			this.purchaseRecordService.deletePurchaseRecord(recId).subscribe( data => {
				this.getPurchaseRecordsList();
			})
		}
	}

	updateRecord(recId: number) {
		let product = document.getElementById('product') as HTMLSelectElement
		let submit = document.getElementById('submit') as HTMLButtonElement
		let quantity = document.getElementById('quantity') as HTMLInputElement
		let price = document.getElementById('price') as HTMLInputElement
		let update = document.getElementById('update') as HTMLButtonElement


		submit.style.display = "none";
		product.style.display = "none";
		update.style.display = "inline";

		this.purchaseRecordService.getPurchaseRecordById(recId).subscribe(
			(data: Object) => {
			this.newRecord = data as PurchaseRecord;
			quantity.value = this.newRecord.recQuantity.toString()
			price.value = this.newRecord.recPrice.toString()
		}, error => console.log(error));
	}

	executeUpdate() {
		let quantity = document.getElementById('quantity') as HTMLInputElement
		let price = document.getElementById('price') as HTMLInputElement

		if (quantity.value == "" || price.value == "") {
			alert("Es necesario rellenar todos los campos");
		} else {
			this.newRecord.recQuantity = quantity.valueAsNumber;
			this.newRecord.recPrice = price.valueAsNumber;
			this.purchaseRecordService.updatePurchaseRecord(this.newRecord.recId, this.newRecord).subscribe( data => {
				this.ngOnInit();
			});
		}
		quantity.value = "";
		price.value = "";
	}

}
