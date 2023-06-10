import { Component, OnInit } from '@angular/core';
import { PurchaseRecord } from '../purchase-record';
import { Product } from '../product';
import { PurchaseRecordService } from '../purchase-record.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {

	purchaseRecord: PurchaseRecord = new PurchaseRecord();
	products: Product[] = [];
	purchaseRecords: PurchaseRecord[] = [];

	constructor (
		private purchaseRecordService: PurchaseRecordService,
		private productService: ProductService
	) {};

	ngOnInit(): void {
		this.productService.getProductsList().subscribe (
			(products: Product[]) => {
				this.products = products
			}, error => console.log(error)
		);

		this.purchaseRecordService.getPurchaseRecordsList().subscribe( data => {
			this.purchaseRecords = data
		}, error => console.log(error));
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

}
