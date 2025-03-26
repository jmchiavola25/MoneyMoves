package com.jocelynchiavola.MoneyMoves.service;

import com.jocelynchiavola.MoneyMoves.domain.Budget;
import com.jocelynchiavola.MoneyMoves.domain.ExpenseRecord;
import com.jocelynchiavola.MoneyMoves.repositories.BudgetRepository;
import com.jocelynchiavola.MoneyMoves.repositories.ExpenseRecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ExpenseRecordServiceImpl implements ExpenseRecordService{

    @Autowired
    private ExpenseRecordRepository expenseRecordRepository;
    @Autowired
    private BudgetRepository budgetRepository;

    @Override
    public List<ExpenseRecord> getAllExpensesForBudget(Long budgetId) {
        return expenseRecordRepository.findByBudgetId(budgetId);
    }

    @Override
    public ExpenseRecord addExpense(Long budgetId, ExpenseRecord expenseRecord) {
        Optional<Budget> budgetOpt = budgetRepository.findById(budgetId);
        if (budgetOpt.isEmpty())
        {
            throw new RuntimeException("Budget not found!");
        }
        Budget budget = budgetOpt.get();
        expenseRecord.setBudget(budget);
        return expenseRecordRepository.save(expenseRecord);
    }

    @Override
    public void deleteExpense(Long expenseId) {
        expenseRecordRepository.deleteById(expenseId);
    }
}
