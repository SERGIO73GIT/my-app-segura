package com.utad.my.app.segura.controller.api;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utad.my.app.segura.dto.DeleteUserDto;
import com.utad.my.app.segura.dto.LoginDto;
import com.utad.my.app.segura.dto.SuccessDto;
import com.utad.my.app.segura.dto.UserDto;
import com.utad.my.app.segura.services.UsersService;

@RestController
@RequestMapping("/api/user")
@Validated
public class UsersController {

    @Autowired
    private UsersService usersService;

    @Autowired
    private HttpSession httpSession;

    @GetMapping("/get-all")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<UserDto> getAll() {

        return usersService.getAll();

    }

    @PostMapping("/login")
    public UserDto checkRoleUser(
            @RequestBody(required = true) LoginDto loginDto) {
        return usersService.checkRole(loginDto.getEmail());

    }

    // Cambiar el role de cualquier usuario por el Administrador

    @PostMapping("/modify-role")

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public UserDto modifyRole(

            @RequestBody(required = true) @Valid UserDto ModifyRoleDto) {

        return usersService.modifyRole(
                ModifyRoleDto.getUsername(),
                ModifyRoleDto.getRole());

    }

    @PostMapping("/delete")

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public SuccessDto delete(

            @RequestBody(required = true) @Valid DeleteUserDto deleteUserDto) {

        usersService.deleteByUsername(deleteUserDto.getUsername());

        return new SuccessDto(true);

    }

}
