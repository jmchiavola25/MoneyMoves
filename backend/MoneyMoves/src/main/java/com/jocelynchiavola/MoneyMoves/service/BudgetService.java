package com.jocelynchiavola.MoneyMoves.service;

import com.jocelynchiavola.MoneyMoves.domain.Budget;
import com.jocelynchiavola.MoneyMoves.domain.BudgetDTO;
import com.jocelynchiavola.MoneyMoves.domain.User;
import com.jocelynchiavola.MoneyMoves.repositories.BudgetRepository;
import com.jocelynchiavola.MoneyMoves.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BudgetService implements BudgetServiceImpl {

    @Autowired
    private final BudgetRepository budgetRepository;
    @Autowired
    private final UserRepository userRepository;

    @Override
    public List<Budget> getBudgetsByUserId(Long userId) {
       User user = userRepository.findById(userId).orElseThrow(() ->
               new RuntimeException("User not found"));
       return budgetRepository.findByUser(user);
    }

    @Override
    public Budget createBudget(Long userId, BudgetDTO budgetDTO) {
        User user = userRepository.findById(userId).orElseThrow(() ->
                new RuntimeException("User not found"));
        // Create a new Budget object and set the properties from the request body
        Budget budget = new Budget();
        budget.setName(budgetDTO.name());
        budget.setFields(budgetDTO.fields());
        budget.setUser(user); // Set the user for this budget
        return budgetRepository.save(budget);
    }
}
