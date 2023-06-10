package com.fmanzanare.pvpcalculator.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fmanzanare.pvpcalculator.Model.PurchaseRecord;
import com.fmanzanare.pvpcalculator.Repository.PurchaseRecordRepository;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:4200/")
public class PurchaseRecordController {

	@Autowired
	private PurchaseRecordRepository repo;

	@GetMapping("/purchase_records")
	public List<PurchaseRecord> purchaseRecordsList() {
		return (repo.findAll());
	}

	@GetMapping("/purchase_records/{recId}")
	public ResponseEntity<PurchaseRecord> getPurchaseRecordById(@PathVariable int recId) {
		PurchaseRecord purchaseRecord = repo.findById(recId).orElse(null);
		return (ResponseEntity.ok(purchaseRecord));
	}

	@PostMapping("/purchase_records")
	public PurchaseRecord addPurchaseRecord(@RequestBody PurchaseRecord purchaseRecord) {
		return (repo.save(purchaseRecord));
	}

}
