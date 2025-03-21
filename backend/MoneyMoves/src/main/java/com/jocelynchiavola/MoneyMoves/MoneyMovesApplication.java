package com.jocelynchiavola.MoneyMoves;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@Configuration
@EnableJpaAuditing
public class MoneyMovesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoneyMovesApplication.class, args);

		System.out.println("Started application");
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/api/**") // Apply CORS for API routes only
						.allowedOrigins("http://localhost:5173") // Allowed origins
						.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allowed HTTP methods
						.allowedHeaders("Content-Type", "Authorization") // Allowed headers
						.allowCredentials(true) // Allow sending credentials (cookies, authorization headers)
						.maxAge(3600); // Cache preflight response for 1 hour
			}
		};
	}

}
