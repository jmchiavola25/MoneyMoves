package com.jocelynchiavola.MoneyMoves.service;

import com.jocelynchiavola.MoneyMoves.domain.ExpenseRecord;
import com.jocelynchiavola.MoneyMoves.domain.ExpenseRecordDTO;

import java.util.List;

public interface ExpenseRecordService {

    List<ExpenseRecord> getAllExpensesForBudget(Long budgetId);
    ExpenseRecord addExpense(Long budgetId, ExpenseRecordDTO expenseRecordDto);
    void deleteExpense(Long expenseId);
}
