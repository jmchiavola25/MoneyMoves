package com.jocelynchiavola.MoneyMoves.service;

import com.jocelynchiavola.MoneyMoves.domain.Budget;
import com.jocelynchiavola.MoneyMoves.domain.BudgetDTO;

import java.util.List;

public interface BudgetServiceImpl {

    List<Budget> getBudgetsByUserId(Long userId);
    Budget createBudget(Long userId, BudgetDTO budgetDTO);
}
