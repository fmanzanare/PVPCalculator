import { TestBed } from '@angular/core/testing';

import { PurchaseRecordService } from './purchase-record.service';

describe('PurchaseRecordService', () => {
  let service: PurchaseRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
