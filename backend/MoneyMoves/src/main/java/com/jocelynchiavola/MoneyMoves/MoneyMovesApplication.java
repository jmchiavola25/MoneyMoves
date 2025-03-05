package com.jocelynchiavola.MoneyMoves;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@Configuration
@EnableJpaAuditing
public class MoneyMovesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoneyMovesApplication.class, args);

		System.out.println("Started application");
	}

}
