package com.utad.my.app.segura.mapper;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.utad.my.app.segura.dto.UserDto;
import com.utad.my.app.segura.entity.UserEntity;

@Service
public class UsersMapper {

    public UserDto toDto(
            UserEntity userEntity) {

        if (userEntity == null) {
            return null;
        }

        UserDto userDto = new UserDto();

        userDto.setUserId(userEntity.getUserId());
        userDto.setEmail(userEntity.getEmail());
        userDto.setRole(userEntity.getRole());

        return userDto;

    }

    public List<UserDto> toDto(
            List<UserEntity> userEntities) {

        if (userEntities == null) {
            return null;
        }

        List<UserDto> userDtos = new ArrayList<>(userEntities.size());

        for (UserEntity userEntity : userEntities) {
            UserDto userDto = toDto(userEntity);
            userDtos.add(userDto);
        }

        return userDtos;

    }

}
