package com.jocelynchiavola.MoneyMoves.controller;

import com.jocelynchiavola.MoneyMoves.domain.AuthenticationRequestDto;
import com.jocelynchiavola.MoneyMoves.domain.AuthenticationResponseDto;
import com.jocelynchiavola.MoneyMoves.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthController {

    private final AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponseDto> authenticate(
            @RequestBody final AuthenticationRequestDto authenticationRequestDto
    ) {
        System.out.printf("Received request: " + authenticationRequestDto.email());
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(authenticationService.authenticate(authenticationRequestDto));
    }
}

