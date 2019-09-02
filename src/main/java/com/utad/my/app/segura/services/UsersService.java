package com.utad.my.app.segura.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.utad.my.app.segura.dto.UserDto;
import com.utad.my.app.segura.entity.UserEntity;
import com.utad.my.app.segura.exception.BusinessLogicException;
import com.utad.my.app.segura.mapper.UsersMapper;
import com.utad.my.app.segura.repository.UsersRepository;

@Service
@Transactional
public class UsersService {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private UsersMapper usersMapper;

    public UserDto getByEmail(
            String email) {

        UserEntity userEntity = usersRepository.findByEmail(email);
        UserDto userDto = usersMapper.toDto(userEntity);
        return userDto;

    }

    public UserDto create(
            String email,
            String role) {

        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(email);
        userEntity.setRole(role);
        userEntity = usersRepository.save(userEntity);

        UserDto userDto = usersMapper.toDto(userEntity);

        return userDto;

    }

    public UserDto checkRole(
            String email) {
        UserDto userDto = getByEmail(email);
        if (userDto == null)
            userDto = create(email, "ROLE_USER");
        return userDto;
    }

    public List<UserDto> getAll() {

        List<UserEntity> userEntities = usersRepository.findAll();
        List<UserDto> userDtos = usersMapper.toDto(userEntities);

        return userDtos;

    }

    public UserDto modifyRole(
            String email,
            String role) {

        UserEntity userEntity = usersRepository.findByEmail(email);
        if (userEntity == null) {
            throw new BusinessLogicException("user-does-not-exist");
        }

        userEntity.setRole(role);
        userEntity = usersRepository.save(userEntity);

        UserDto userDto = usersMapper.toDto(userEntity);

        return userDto;

    }

    public void deleteByUsername(
            String email) {

        UserEntity userEntity = usersRepository.findByEmail(email);

        if (userEntity == null) {
            throw new BusinessLogicException("user-does-not-exist");
        }

        usersRepository.delete(userEntity);

    }

}
