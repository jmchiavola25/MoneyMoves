package com.jocelynchiavola.MoneyMoves.service;

import com.jocelynchiavola.MoneyMoves.domain.Budget;
import com.jocelynchiavola.MoneyMoves.domain.ExpenseRecord;
import com.jocelynchiavola.MoneyMoves.domain.ExpenseRecordDTO;
import com.jocelynchiavola.MoneyMoves.repositories.BudgetRepository;
import com.jocelynchiavola.MoneyMoves.repositories.ExpenseRecordRepository;
import jakarta.transaction.Transactional;
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
    public ExpenseRecord addExpense(Long budgetId, ExpenseRecordDTO expenseRecordDto) {
        Optional<Budget> budgetOpt = budgetRepository.findById(budgetId);
        if (budgetOpt.isEmpty())
        {
            throw new RuntimeException("Budget not found!");
        }

        Budget budget = budgetOpt.get();
        ExpenseRecord expenseRecord = new ExpenseRecord();
        System.out.println(expenseRecordDto.fieldValues());
        expenseRecord.setFieldValues(expenseRecordDto.fieldValues());
        expenseRecord.setBudget(budget);

        // Validate that all fieldValues keys exist in Budget fields
        for (String key : expenseRecord.getFieldValues().keySet()) {
            if (!budget.getFields().contains(key)) {
                throw new RuntimeException("Invalid field: " + key);
            }
        }

        System.out.println("Expense added");
        return expenseRecordRepository.save(expenseRecord);
    }

    @Override
    @Transactional
    public void deleteExpense(Long expenseId) {
        expenseRecordRepository.deleteById(expenseId);
    }
}
