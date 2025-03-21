package com.jocelynchiavola.MoneyMoves.service;

import com.jocelynchiavola.MoneyMoves.domain.Budget;
import com.jocelynchiavola.MoneyMoves.domain.BudgetField;
import com.jocelynchiavola.MoneyMoves.repositories.BudgetFieldRepository;
import com.jocelynchiavola.MoneyMoves.repositories.BudgetRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BudgetFieldServiceImpl implements BudgetFieldService {

    @Autowired
    private final BudgetRepository budgetRepository;

    @Autowired
    private final BudgetFieldRepository budgetFieldRepository;

    @Override
    public BudgetField createBudgetField(Long budgetId, BudgetField budgetField) {
        Budget budget = budgetRepository.findById(budgetId).orElseThrow(() ->
                new RuntimeException("Budget not found"));
        budgetField.setBudget(budget);
        return budgetFieldRepository.save(budgetField);
    }

    @Override
    public List<BudgetField> getAllFieldsByBudget(Long budgetId) {
        return budgetFieldRepository.findByBudgetId(budgetId);
    }
}
