package com.utad.my.app.segura.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

@Entity
@Table(name = "notes")
public class NoteEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "note_id")
    @Positive
    private Long noteId;

    @Column(name = "title")
    @NotBlank
    @NotNull
    @Size(max = 50)
    @Pattern(regexp = "[\\\\:\\\\;\\\\)\\\\(\\\\.\\\\+\\\\*\\s0-9a-zA-Z_-]*")
    private String title;

    @Column(name = "description")
    @NotBlank
    @NotNull
    @Size(max = 250)
    @Pattern(regexp = "[\\\\:\\\\;\\\\)\\\\(\\\\.\\\\+\\\\*\\s0-9a-zA-Z_-]*")
    private String description;

    @Column(name = "date")
    @NotBlank
    @NotNull
    @Pattern(regexp = "[0-9-:\\s]*")
    private String date;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "owner_id")
    @NotNull
    private UserEntity ownerNotes;

    public Long getNoteId() {
        return noteId;
    }

    public void setNoteId(
            Long noteId) {
        this.noteId = noteId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(
            String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(
            String description) {
        this.description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(
            String date) {
        this.date = date;
    }

    public UserEntity getOwnerNotes() {
        return ownerNotes;
    }

    public void setOwnerNotes(
            UserEntity ownerNotes) {
        this.ownerNotes = ownerNotes;
    }

}
