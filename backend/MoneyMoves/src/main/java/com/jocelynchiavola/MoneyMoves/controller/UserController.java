package com.jocelynchiavola.MoneyMoves.controller;

import com.jocelynchiavola.MoneyMoves.domain.UserDto;
import com.jocelynchiavola.MoneyMoves.domain.UserMapper;
import com.jocelynchiavola.MoneyMoves.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
// Allow frontend to communicate with this backend
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private final UserMapper userMapper;

    @GetMapping("/me")
    public ResponseEntity<UserDto> getUserProfile(
            final Authentication authentication) {

        final var user =
                userService.getUser(authentication.getName());

        return ResponseEntity.ok(userMapper.toUserDto(user));
    }
}

