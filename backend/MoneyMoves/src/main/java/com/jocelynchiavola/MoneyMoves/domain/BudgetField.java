package com.jocelynchiavola.MoneyMoves.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "budget_fields")
@Getter
@Setter
@NoArgsConstructor
public class BudgetField {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "budget_id", nullable = false)
    private Budget budget;

    @Column(columnDefinition = "jsonb", nullable = false)
    private String customFields;
}
