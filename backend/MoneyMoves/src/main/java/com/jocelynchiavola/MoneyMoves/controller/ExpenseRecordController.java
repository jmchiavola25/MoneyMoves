package com.jocelynchiavola.MoneyMoves.controller;

import com.jocelynchiavola.MoneyMoves.domain.ExpenseRecord;
import com.jocelynchiavola.MoneyMoves.domain.ExpenseRecordDTO;
import com.jocelynchiavola.MoneyMoves.service.ExpenseRecordService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/expenses")
@RequiredArgsConstructor
public class ExpenseRecordController {

    @Autowired
    private ExpenseRecordService expenseRecordService;

    @GetMapping("/{budgetId}")
    public List<ExpenseRecord> getExpensesForBudget(@PathVariable Long budgetId) {
        return expenseRecordService.getAllExpensesForBudget(budgetId);
    }

    @CrossOrigin
    @PostMapping("/{budgetId}")
    public ResponseEntity<ExpenseRecord> addExpense(@PathVariable("budgetId") Long budgetId, @RequestBody ExpenseRecordDTO expenseRecordDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(expenseRecordService.addExpense(budgetId, expenseRecordDto));
    }

    @DeleteMapping("/{expenseId}")
    public void deleteExpense(@PathVariable Long expenseId) {
        expenseRecordService.deleteExpense(expenseId);
    }
}
