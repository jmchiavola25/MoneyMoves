package com.jocelynchiavola.MoneyMoves.service;

import com.jocelynchiavola.MoneyMoves.domain.AuthenticationRequestDto;
import com.jocelynchiavola.MoneyMoves.domain.AuthenticationResponseDto;
import com.jocelynchiavola.MoneyMoves.domain.User;
import com.jocelynchiavola.MoneyMoves.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

// AuthenticationService.java
@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserRepository userRepository;

    public AuthenticationResponseDto authenticate(
            final AuthenticationRequestDto request) {

        final var authToken = UsernamePasswordAuthenticationToken
                .unauthenticated(request.email(), request.password());

        final var authentication = authenticationManager
                .authenticate(authToken);

        // Retrieve user from database
        User user = userRepository.findUserByEmail(request.email())
                .orElseThrow(() -> new RuntimeException("User not found"));

        final var token = jwtService.generateToken(request.email());
        System.out.printf("got token");
        return new AuthenticationResponseDto(token, user.getId());
    }
}
