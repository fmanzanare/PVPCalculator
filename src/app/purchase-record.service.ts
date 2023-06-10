import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PurchaseRecord } from './purchase-record';

@Injectable({
  providedIn: 'root'
})
export class PurchaseRecordService {

	private baseURL = "http://localhost:8080/purchase_records"

	constructor(private httpClient: HttpClient) {}

	getPurchaseRecordsList(): Observable<PurchaseRecord[]> {
		return (this.httpClient.get<PurchaseRecord[]>(`${this.baseURL}`));
	}

	getPurchaseRecordById(recId: number): Observable<PurchaseRecord> {
		return (this.httpClient.get<PurchaseRecord>(`${this.baseURL}/${recId}`));
	}

	addPurchaseRecord(purchaseRecord: PurchaseRecord): Observable<Object> {
		return (this.httpClient.post(`${this.baseURL}`, purchaseRecord));
	}
}
