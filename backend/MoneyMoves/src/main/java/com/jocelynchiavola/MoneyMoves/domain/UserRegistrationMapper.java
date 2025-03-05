package com.jocelynchiavola.MoneyMoves.domain;

import org.springframework.stereotype.Component;

// UserRegistrationMapper.java
@Component
public class UserRegistrationMapper {

    public User toEntity(RegistrationRequestDto registrationRequestDto) {
        final var user = new User();

        user.setEmail(registrationRequestDto.email());
        user.setPassword(registrationRequestDto.password());

        return user;
    }

    public RegistrationResponseDto toRegistrationResponseDto(final User user)
    {
        return new RegistrationResponseDto(
                user.getEmail(), user.getPassword());
    }

}
