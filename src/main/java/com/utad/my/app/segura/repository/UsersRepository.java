package com.utad.my.app.segura.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.utad.my.app.segura.entity.UserEntity;

public interface UsersRepository
        extends JpaRepository<UserEntity, Long> {

    UserEntity findByEmail(
            String email);

}
