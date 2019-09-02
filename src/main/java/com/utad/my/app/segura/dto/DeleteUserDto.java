package com.utad.my.app.segura.dto;

import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class DeleteUserDto {

    @JsonIgnore
    private Long userId;

    @Pattern(regexp = "[A-Za-z0-9_-]*@[gmail]*[.]com")
    private String email;

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

}
