import { Component, OnInit } from '@angular/core';
import { PurchaseRecord } from '../purchase-record';
import { PurchaseRecordService } from '../purchase-record.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

	purchaseRecords: PurchaseRecord[] = [];

	constructor (
		private purchaseRecordsService: PurchaseRecordService
	) {};

	ngOnInit(): void {
		this.purchaseRecordsService.getPurchaseRecordsList().subscribe ( data => {
			this.purchaseRecords = data
		}, error => console.log(error));
	}

}
