package com.utad.my.app.segura.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.utad.my.app.segura.entity.NoteEntity;

public interface NotesRepository
        extends JpaRepository<NoteEntity, Long> {

    List<NoteEntity> findByOwnerNotesUserId(
            Long userId);

    NoteEntity findByOwnerNotesUserIdAndNoteId(
            Long userId,
            Long noteId);

}
