package com.jocelynchiavola.MoneyMoves.service;

import com.jocelynchiavola.MoneyMoves.domain.Budget;
import com.jocelynchiavola.MoneyMoves.domain.BudgetDTO;

import java.util.List;

public interface BudgetService {

    List<Budget> getBudgetsByUserId(Long userId);
    Budget createBudget(Long userId, BudgetDTO budgetDTO);
    void deleteBudget(Long budgetId);
}
