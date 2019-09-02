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

import com.utad.my.app.segura.dto.NoteDto;
import com.utad.my.app.segura.dto.SuccessDto;
import com.utad.my.app.segura.services.NoteService;

@RestController
@RequestMapping("/api/notes")
@Validated
public class NotesController {

    @Autowired
    private NoteService noteService;

    @Autowired
    private HttpSession httpSession;

    @GetMapping("/get-all-my-notes")
    @PreAuthorize("hasRole('ROLE_USER')")
    public List<NoteDto> getAllMyNotes() {

        Long userId = (Long) httpSession.getAttribute("user-id");

        return noteService.getByOwner(userId);

    }

    @PostMapping("/create")
    @PreAuthorize("hasRole('ROLE_USER')")
    public NoteDto create(
            @RequestBody(required = true) @Valid NoteDto noteDto) {

        Long userId = (Long) httpSession.getAttribute("user-id");

        return noteService.add(userId, noteDto.getTitle(), noteDto.getDescription(), noteDto.getDate());

    }

    @PostMapping("/delete")
    @PreAuthorize("hasRole('ROLE_USER')")
    public SuccessDto delete(
            @RequestBody(required = true) @Valid NoteDto deleteNoteDto) {

        Long userId = (Long) httpSession.getAttribute("user-id");

        noteService.deleteNote(userId, deleteNoteDto.getNoteId());

        return new SuccessDto(true);

    }

    @GetMapping("/get-all-notes")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<NoteDto> getAll() {

        return noteService.getAll();

    }

    @PostMapping("/modify")
    @PreAuthorize("hasRole('ROLE_USER')")
    public NoteDto modify(
            @RequestBody(required = true) @Valid NoteDto noteDto) {

        Long userId = (Long) httpSession.getAttribute("user-id");

        return noteService.modify(userId, noteDto.getNoteId(), noteDto.getTitle(), noteDto.getDescription(), noteDto.getDate());

    }
}
