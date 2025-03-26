package com.jocelynchiavola.MoneyMoves.repositories;

import com.jocelynchiavola.MoneyMoves.domain.ExpenseRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpenseRecordRepository extends JpaRepository<ExpenseRecord, Long> {

    List<ExpenseRecord> findByBudgetId(Long budgetId);
}
