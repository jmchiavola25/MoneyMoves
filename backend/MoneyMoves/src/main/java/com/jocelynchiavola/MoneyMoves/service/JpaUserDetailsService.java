package com.jocelynchiavola.MoneyMoves.service;

import com.jocelynchiavola.MoneyMoves.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JpaUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(final String email)
            throws UsernameNotFoundException {

        return userRepository.findUserByEmail(email).map(user ->
                User.builder()
                        .username(email)
                        .password(user.getPassword())
                        .build()
        ).orElseThrow(() -> new UsernameNotFoundException(
                "User with email [%s] not found".formatted(email)));
    }



}
