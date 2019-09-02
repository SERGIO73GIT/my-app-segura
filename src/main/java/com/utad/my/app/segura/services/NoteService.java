package com.utad.my.app.segura.services;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.utad.my.app.segura.dto.NoteDto;
import com.utad.my.app.segura.entity.NoteEntity;
import com.utad.my.app.segura.exception.BusinessLogicException;
import com.utad.my.app.segura.mapper.NoteMapper;
import com.utad.my.app.segura.repository.NotesRepository;
import com.utad.my.app.segura.repository.UsersRepository;

@Service
@Transactional
public class NoteService {

    @Autowired
    private NotesRepository notesRepository;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private NoteMapper noteMapper;

    final static String hour = " 00:00:00";

    public List<NoteDto> getAll() {

        List<NoteEntity> noteEntities = notesRepository.findAll();
        List<NoteDto> noteDtos = noteMapper.toDto(noteEntities);

        return noteDtos;

    }

    public List<NoteDto> getByOwner(
            Long ownerUserId) {

        List<NoteEntity> noteEntities = notesRepository.findByOwnerNotesUserId(ownerUserId);
        Collections.sort(noteEntities, new Comparator<NoteEntity>() {

            @Override
            public int compare(
                    NoteEntity u1,
                    NoteEntity u2) {
                return u1.getDate().compareTo(u2.getDate());
            }
        });
        List<NoteDto> noteDtos = noteMapper.toDto(noteEntities);

        return noteDtos;

    }

    public NoteDto add(
            Long ownerUserId,
            String title,
            String description,
            String date) {
        List<NoteEntity> noteEntities = notesRepository.findByOwnerNotesUserId(ownerUserId);
        if (noteEntities.size() >= 50) {
            throw new BusinessLogicException("lleno");
        }
        NoteEntity noteEntity = new NoteEntity();
        noteEntity.setTitle(title);
        noteEntity.setDescription(description);
        date = date + hour;
        noteEntity.setDate(date);
        noteEntity.setOwnerNotes(usersRepository.findOne(ownerUserId));
        noteEntity = notesRepository.save(noteEntity);

        NoteDto noteDto = noteMapper.toDto(noteEntity);

        return noteDto;

    }

    public void deleteNote(
            Long userId,
            Long noteId) {
        NoteEntity noteEntity = notesRepository.findByOwnerNotesUserIdAndNoteId(userId, noteId);
        if (noteEntity == null)
            throw new BusinessLogicException("Note-no-existe");
        notesRepository.delete(noteEntity);

    }

    public NoteDto modify(
            Long ownerUserId,
            Long noteId,
            String title,
            String description,
            String date) {
        List<NoteEntity> noteEntities = notesRepository.findByOwnerNotesUserId(ownerUserId);
        if (noteEntities.size() >= 50) {
            throw new BusinessLogicException("lleno");
        }
        for (NoteEntity noteEntity : noteEntities) {
            if (noteEntity.getNoteId() == noteId) {
                noteEntity.setTitle(title);
                noteEntity.setDescription(description);
                date = date + hour;
                noteEntity.setDate(date);
                noteEntity = notesRepository.save(noteEntity);
                NoteDto noteDto = noteMapper.toDto(noteEntity);

                return noteDto;
            }
        }
        throw new BusinessLogicException("no-existe-nota");

    }
}
