package com.jocelynchiavola.MoneyMoves.service;

import com.jocelynchiavola.MoneyMoves.domain.BudgetField;

import java.util.List;

public interface BudgetFieldService {

    BudgetField createBudgetField(Long budgetId, BudgetField budgetField);
    List<BudgetField> getAllFieldsByBudget(Long budgetId);
}
