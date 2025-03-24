package com.jocelynchiavola.MoneyMoves.controller;

import com.jocelynchiavola.MoneyMoves.domain.Budget;
import com.jocelynchiavola.MoneyMoves.domain.BudgetDTO;
import com.jocelynchiavola.MoneyMoves.service.BudgetService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/budgets")
@RequiredArgsConstructor
@CrossOrigin
public class BudgetController {

    @Autowired
    private BudgetService budgetService;

    @GetMapping("/{userId}")
    public ResponseEntity<List<Budget>> getBudgetsByUser(@PathVariable Long userId)
    {
        return ResponseEntity.ok(budgetService.getBudgetsByUserId(userId));
    }

    @PostMapping("/{userId}")
    public ResponseEntity<Budget> createBudget(@PathVariable("userId") Long userId, @RequestBody BudgetDTO budgetDTO)
    {
        return ResponseEntity.status(HttpStatus.CREATED).body(budgetService.createBudget(userId, budgetDTO));
    }

}
