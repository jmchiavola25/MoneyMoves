package com.jocelynchiavola.MoneyMoves.controller;

import com.jocelynchiavola.MoneyMoves.domain.UserDto;
import com.jocelynchiavola.MoneyMoves.domain.UserMapper;
import com.jocelynchiavola.MoneyMoves.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
@CrossOrigin
// Allow frontend to communicate with this backend
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private final UserMapper userMapper;

    @CrossOrigin
    @GetMapping("/profile")
    public ResponseEntity<UserDto> getUserProfile(
            final Authentication authentication) {

        final var user =
                userService.getUser(authentication.getName());

        return ResponseEntity.ok(userMapper.toUserDto(user));
    }

    @CrossOrigin
    @GetMapping("/id")
    public ResponseEntity<Long> getUserId()
    {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof UserDetails userDetails) {
            // Assuming the username or a custom field in user details holds the user ID
            return ResponseEntity.ok(Long.parseLong(userDetails.getUsername()));  // Or another field containing the ID
        } else {
            throw new RuntimeException("User is not authenticated");
        }
    }
}

