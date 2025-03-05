package com.jocelynchiavola.MoneyMoves.domain;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

// UserMapper.java
@Component
@RequiredArgsConstructor
public class UserMapper {
    public UserDto toUserDto(final User user) {
        return new UserDto(user.getEmail(), user.getPassword());
    }
}
