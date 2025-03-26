package com.jocelynchiavola.MoneyMoves.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Map;

@Entity
@Table(name = "expense_records")
@Getter
@Setter
@NoArgsConstructor
public class ExpenseRecord {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "budget_id", nullable = false)
    @JsonBackReference
    private Budget budget;

    @ElementCollection
    @CollectionTable(name = "expense_fields", joinColumns = @JoinColumn(name = "expense_id"))
    @MapKeyColumn(name = "field_name")
    @Column(name = "field_value")
    private Map<String, String> fieldValues; // Stores field-value pairs dynamically
}

