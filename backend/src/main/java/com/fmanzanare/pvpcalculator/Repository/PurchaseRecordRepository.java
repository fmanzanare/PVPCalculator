package com.fmanzanare.pvpcalculator.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fmanzanare.pvpcalculator.Model.PurchaseRecord;

public interface PurchaseRecordRepository extends JpaRepository<PurchaseRecord, Integer> {}
