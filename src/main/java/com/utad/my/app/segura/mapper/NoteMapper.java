package com.utad.my.app.segura.mapper;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.utad.my.app.segura.dto.NoteDto;
import com.utad.my.app.segura.entity.NoteEntity;

@Service
public class NoteMapper {

    public NoteDto toDto(
            NoteEntity noteEntity) {

        if (noteEntity == null) {
            return null;
        }

        NoteDto noteDto = new NoteDto();
        noteDto.setNoteId(noteEntity.getNoteId());
        noteDto.setTitle(noteEntity.getTitle());
        noteDto.setDescription(noteEntity.getDescription());

        noteDto.setDate(noteEntity.getDate().substring(0, 10));

        return noteDto;

    }

    public List<NoteDto> toDto(
            List<NoteEntity> noteEntities) {

        if (noteEntities == null) {
            return null;
        }

        List<NoteDto> noteDtos = new ArrayList<>(noteEntities.size());

        for (NoteEntity noteEntity : noteEntities) {
            NoteDto noteDto = toDto(noteEntity);
            noteDtos.add(noteDto);
        }

        return noteDtos;

    }

}
