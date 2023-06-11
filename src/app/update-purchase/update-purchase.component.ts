import { Component, OnInit } from '@angular/core';
import { PurchaseRecord } from '../purchase-record';
import { PurchaseRecordService } from '../purchase-record.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-purchase',
  templateUrl: './update-purchase.component.html',
  styleUrls: ['./update-purchase.component.css']
})
export class UpdatePurchaseComponent implements OnInit {

	recId: number;
	record: PurchaseRecord = new PurchaseRecord();

	constructor(
		private purchaseRecordService: PurchaseRecordService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.recId = this.route.snapshot.params['recId'];
		this.purchaseRecordService.getPurchaseRecordById(this.recId).subscribe(
			(data: Object) => {
				this.record = data as PurchaseRecord
			}, error => console.log(error));
	}

	goToAddPurchaseRecord() {
		this.router.navigate(['/add-purchase']);
	}

	onSubmit() {
		this.purchaseRecordService.updatePurchaseRecord(this.recId, this.record).subscribe( data => {
			this.goToAddPurchaseRecord();
		}, error => console.log(error));
	}

}
