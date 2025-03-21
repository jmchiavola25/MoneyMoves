package com.jocelynchiavola.MoneyMoves.controller;

import com.jocelynchiavola.MoneyMoves.domain.BudgetField;
import com.jocelynchiavola.MoneyMoves.service.BudgetFieldService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/fields")
@RequiredArgsConstructor
@CrossOrigin
public class BudgetFieldController {

    @Autowired
    private BudgetFieldService budgetFieldService;

    @GetMapping("/{budgetId}")
    public ResponseEntity<List<BudgetField>> getEntriesByBudget(@PathVariable Long budgetId)
    {
        return ResponseEntity.ok(budgetFieldService.getAllFieldsByBudget(budgetId));
    }

    @PostMapping("/{budgetId}")
    public ResponseEntity<BudgetField> createBudgetField(@PathVariable Long budgetId,
                                                         @RequestBody BudgetField budgetField)
    {
        return ResponseEntity.status(HttpStatus.CREATED).body(budgetFieldService.createBudgetField(budgetId,
                budgetField));
    }
}
