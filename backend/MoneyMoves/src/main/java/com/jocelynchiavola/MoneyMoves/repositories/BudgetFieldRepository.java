package com.jocelynchiavola.MoneyMoves.repositories;

import com.jocelynchiavola.MoneyMoves.domain.BudgetField;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BudgetFieldRepository extends JpaRepository<BudgetField, Long> {

    List<BudgetField> findByBudgetId(Long budgetId);
}
