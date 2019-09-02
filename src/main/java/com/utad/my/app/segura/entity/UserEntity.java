package com.utad.my.app.segura.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_user")
    @Positive
    private Long userId;

    @Column(name = "email")
    @NotBlank
    @Size(min = 9, max = 60)
    @Pattern(regexp = "[A-Za-z0-9_-]*@[gmail]*[.]com")
    private String email;

    @Column(name = "role")
    @NotBlank
    @Pattern(regexp = "ROLE_(ADMIN|USER)")
    private String role;

    @OneToMany(mappedBy = "ownerNotes", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<NoteEntity> ownedNotes;
    /*
     * @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
     * private List<BankAccountEntity> ownedBankAccounts;
     * 
     * @ManyToMany(fetch = FetchType.LAZY)
     * 
     * @JoinTable(name = "allowed_bank_accounts", joinColumns = @JoinColumn(name = "id_user"), inverseJoinColumns = @JoinColumn(name =
     * "id_bank_account"))
     * private List<BankAccountEntity> allowedAccounts;
     */

    public Long getUserId() {
        return userId;
    }

    public void setUserId(
            Long userId) {
        this.userId = userId;
    }

    public String getEmail() {
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

    public List<NoteEntity> getOwnedNotes() {
        return ownedNotes;
    }

    public void setOwnedNotes(
            List<NoteEntity> ownedNotes) {
        this.ownedNotes = ownedNotes;
    }

}
