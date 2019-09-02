package com.utad.my.app.segura.dto;

import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class UserDto {

    @JsonIgnore
    private Long userId;

    @Pattern(regexp = "[A-Za-z0-9_-]*@[gmail]*[.]com")
    private String email;

    @Pattern(regexp = "ROLE_(ADMIN|USER)")
    private String role;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(
            Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return email;
    }

    public void setEmail(
            String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(
            String role) {
        this.role = role;
    }

}
