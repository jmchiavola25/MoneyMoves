package com.jocelynchiavola.MoneyMoves.controller;

import com.jocelynchiavola.MoneyMoves.domain.ExpenseRecord;
import com.jocelynchiavola.MoneyMoves.service.ExpenseRecordService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/expenses")
@RequiredArgsConstructor
public class ExpenseRecordController {

    @Autowired
    private ExpenseRecordService expenseRecordService;

    @GetMapping("/{budgetId}")
    public List<ExpenseRecord> getExpensesForBudget(@PathVariable Long budgetId) {
        return expenseRecordService.getAllExpensesForBudget(budgetId);
    }

    @PostMapping("/{budgetId}")
    public ExpenseRecord addExpense(@PathVariable Long budgetId, @RequestBody ExpenseRecord expenseRecord) {
        return expenseRecordService.addExpense(budgetId, expenseRecord);
    }

    @DeleteMapping("/{expenseId}")
    public void deleteExpense(@PathVariable Long expenseId) {
        expenseRecordService.deleteExpense(expenseId);
    }
}
