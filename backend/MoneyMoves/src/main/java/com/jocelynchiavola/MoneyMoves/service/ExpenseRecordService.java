package com.jocelynchiavola.MoneyMoves.service;

import com.jocelynchiavola.MoneyMoves.domain.ExpenseRecord;

import java.util.List;

public interface ExpenseRecordService {

    List<ExpenseRecord> getAllExpensesForBudget(Long budgetId);
    ExpenseRecord addExpense(Long budgetId, ExpenseRecord expenseRecord);
    void deleteExpense(Long expenseId);
}
