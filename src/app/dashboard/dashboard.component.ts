import { Component, OnInit } from '@angular/core';
import { PurchaseRecord } from '../purchase-record';
import { PurchaseRecordService } from '../purchase-record.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

	purchaseRecords: PurchaseRecord[] = [];
	products: Product[] = [];

	constructor (
		private purchaseRecordsService: PurchaseRecordService,
		private productService: ProductService
	) {};

	ngOnInit(): void {
		this.purchaseRecordsService.getPurchaseRecordsList().subscribe ( data => {
			this.purchaseRecords = data
		}, error => console.log(error));

		this.productService.getProductsList().subscribe( data => {
			this.products = data
		}, error => console.log(error));
	}

}
