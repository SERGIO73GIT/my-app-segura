package com.utad.my.app.segura.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class LoginDto {

    @NotBlank
    @Size(min = 9, max = 60)
    @Pattern(regexp = "[A-Za-z0-9_-]*@[gmail]*[.]com")
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(
            String email) {
        this.email = email;
    }

}
