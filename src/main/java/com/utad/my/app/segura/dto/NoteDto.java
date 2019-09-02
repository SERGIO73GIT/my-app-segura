package com.utad.my.app.segura.dto;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class NoteDto {

    private Long noteId;

    @Size(max = 50)
    @Pattern(regexp = "[\\\\:\\\\;\\\\)\\\\(\\\\.\\\\+\\\\*\\s0-9a-zA-Z_-]*")
    private String title;

    @Size(max = 250)
    @Pattern(regexp = "[\\\\:\\\\;\\\\)\\\\(\\\\.\\\\+\\\\*\\s0-9a-zA-Z_-]*")
    private String description;

    @Pattern(regexp = "[0-9]{4}-[0-9]{2}-[0-9]{2}")
    private String date;

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

    public Long getNoteId() {
        return noteId;
    }

    public void setNoteId(
            Long noteId) {
        this.noteId = noteId;
    }

}
