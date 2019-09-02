import React, { Component } from 'react';
import { Container, Button, Table, Form, FormGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Octicon, { DiffAdded, Sync, Trashcan, RepoPull, Plus, Pencil } from '@githubprimer/octicons-react'
import { registerViewComponent, getViewComponent } from 'services/view-components.jsx';
import { t } from 'services/translation.jsx';
import { get, post } from 'services/rest.jsx';
import { modalConfirmation } from 'services/modal.jsx';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';



class Notes extends Component {

    constructor(props) {

        // Props.
        super(props);

        // Register this view component.
        registerViewComponent('notes', this);

        // Functions binding to this.
        this.loadNotes = this.loadNotes.bind(this);
        this.createNote = this.createNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.openCreateNoteModal = this.openCreateNoteModal.bind(this);
        this.openModifyNoteModal = this.openModifyNoteModal.bind(this);

        // Refs.
            //create
        this.txtCreateNoteTitle = React.createRef();
        this.txtCreateNoteDescription = React.createRef();
        this.dateCreateNote = React.createRef();
            //modify
        this.txtModifyNoteTitle = React.createRef();
        this.txtModifyNoteDescription = React.createRef();
        this.dateModifyNote = React.createRef();
        
        // State.
        this.state = {
                notes: [],
               modifiers:{ 
                    highlighted: []},
                createNoteModalActive: false,
                modifyNoteModalActive: false,
                titleNote: '',
                noteId: '',
                descriptionNote: '',
                dateNote: new Date(),
                day: new Date()
                
        };
        

    }
    
    componentDidMount() {

        this.loadNotes();
        

    }
    
    loadNotes() {

        get({
            url: '/api/notes/get-all-my-notes',
            callback: (response) => {
                this.setState({
                    notes: response
                }, () => {
                    this.selectDays(response);
                });
            }
        });

    }
    
    selectDays(notes) {
        const modifiers = {
                highlighted: []
              };
        
        //this.state.modifiers.highlighted.splice(0, this.state.modifiers.highlighted.length);
        if (notes != null & notes.length > 0){
            notes.map((note, i) =>
                modifiers.highlighted.push(new Date(note.date))
            )
        }
        this.setState({
            modifiers: modifiers
            })
    }

    createNote() {

        post({
            url: '/api/notes/create',
            body: {
                'title': this.state.titleNote,
                'description' : this.state.descriptionNote,
                'date': this.state.dateNote.toJSON().substring(0,10)
            },
            callback: (response) => {
                this.setState({
                    createNoteModalActive: false,
                    titleNote: '',
                    descriptionNote: '',
                    dateNote: Date.now()
                }, () => {
                    this.loadNotes();
                });
            }
        });

    }

    deleteNote(note) {

        modalConfirmation(
            t('global.confirmation'),
            t('notes.delete-note-confirmation'),
            () => {

                post({
                    url: '/api/notes/delete',
                    body: {
                        'noteId': note.noteId
                    },
                    callback: (response) => {
                        this.loadNotes();
                    }
                });

            }
        );

    }
    
    modifyNote(note){
        post({
            url: '/api/notes/modify',
            body: {
                'noteId': this.state.noteId,
                'title': this.state.titleNote,
                'description' : this.state.descriptionNote,
                'date': this.state.dateNote.toJSON().substring(0,10)
            },
            callback: (response) => {
                this.setState({
                    modifyNoteModalActive: false,
                    noteId: '',
                    titleNote: '',
                    descriptionNote: '',
                    dateNote: Date.now()
                }, () => {
                    this.loadNotes();
                });
            }
        });
    }
    
    openCreateNoteModal() {

        this.setState({
            createNoteModalActive: true,
            titleNote: '',
            descriptionNote: '',
            dateNote: Date.now()
        }, () => {
            this.txtCreateNoteTitle.current.focus();
        });

    }
    
    openModifyNoteModal(note) {

        this.setState({
            modifyNoteModalActive: true,
            noteId: note.noteId,
            titleNote: note.title,
            descriptionNote: note.description,
            dateNote: new Date(new Date(note.date))
        }, () => {
            this.txtModifyNoteTitle.current.focus();
        });

    }
    
    checkSpcialChar(event){
        if(((event.which >= 65) && (event.which <= 90) || (event.which >= 97) && (event.which <= 122) || (event.which == 95)
                || (event.which >= 40) && (event.which <= 59) && (event.which != 44) && (event.which != 47) 
                || (event.which == 9) || (event.which == 127) || (event.which == 32))){
            return true;
        }
        return false;
     }
    

    render() {

        return (
            <Container>

                <h4>{t('notes.header')}</h4><hr />
                <div>
                    <DayPicker modifiers={this.state.modifiers} numberOfMonths={2} />
                </div>
                <div className="group-spaced" style={{ margin: '1.5rem 0' }}>
                    <Button color="primary" onClick={this.openCreateNoteModal}><Octicon className="button-icon" icon={DiffAdded} />{t('notes.btn-create-note')}</Button>
                    <Button color="secondary" onClick={this.loadNotes}><Octicon className="button-icon" icon={Sync} />{t('notes.btn-reload')}</Button>
                </div>

                    {
                        this.state.notes == null ?
                            null :
                            this.state.notes.length == 0 ?
                                <p>{t('notes.no-notes')}</p> :
                                <Table striped hover>
                                    <thead>
                                        <tr>
                                            <th style={{ width: '30%' }}>{t('notes.table-title')}</th>
                                            <th style={{ width: '60%' }}>{t('notes.table-description')}</th>
                                            <th style={{ width: '20%' }}>{t('notes.table-date')}</th>
                                            <th style={{ width: '12rem' }}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.notes.map((note, i) =>
                                            <tr key={'secret-' + note.title} style={ new Date(note.date)<Date.now() ? {backgroundColor: 'red'} : {}}> 
                                                <td style={{ width: '30%' }}>{note.title}</td>
                                                <td style={{ width: '60%' }}>{note.description}</td>
                                                <td style={{ width: '20%' }}>{note.date}</td>
                                                <td style={{ width: '12rem' }} align="center">
                                                    <span onClick={() => { this.deleteNote(note) }} style={{ cursor: 'pointer' }}>
                                                        <Octicon icon={Trashcan} />
                                                    </span>
                                                    <span className="space-between-icons"></span>
                                                    <span onClick={() => { this.openModifyNoteModal(note) }} style={{ cursor: 'pointer' }}>
                                                        <Octicon icon={Pencil} />
                                                    </span>
                                                </td>
                                            </tr>  
                                            
                                        )}
                                    </tbody>
                                </Table>
                    }
                    
                    <Modal isOpen={this.state.createNoteModalActive} toggle={() => { this.setState({ createNoteModalActive: false }) }}>
                    <ModalHeader>{t('notes.create-note-modal-title')}</ModalHeader>
                    <ModalBody>
                        <Form id="notes-create-form" onSubmit={(e) => { e.preventDefault(); this.createNote(); }}>
                            <FormGroup>
                                <Input
                                    innerRef={this.txtCreateNoteTitle}
                                    type="text"
                                    placeholder={t('notes.txt-title')}
                                    required
                                    autoFocus
                                    onKeyPress={(e) => {this.checkSpcialChar(e) ? null:e.preventDefault()}}
                                    onChange={(e) => { this.setState({ titleNote: e.target.value }) }}
                                /><Input
                                    innerRef={this.txtCreateNoteDescription}
                                    type="text"
                                    placeholder={t('notes.txt-description')}
                                    required
                                    autoFocus
                                    onKeyPress={(e) => {this.checkSpcialChar(e) ? null:e.preventDefault()}}
                                    onChange={(e) => { this.setState({ descriptionNote: e.target.value }) }}
                                /><DayPickerInput innerRef={this.dateCreateNote} 
                                    required 
                                    onDayChange={day => { this.setState({ dateNote: day }) }}
                                />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" form="notes-create-form" color="primary">{t('notes.btn-create-note')}</Button>
                    </ModalFooter>
                </Modal>
                                    
                <Modal isOpen={this.state.modifyNoteModalActive} toggle={() => { this.setState({ modifyNoteModalActive: false }) }}>
                    <ModalHeader>{t('notes.modify-note-modal-title')}</ModalHeader>
                    <ModalBody>
                        <Form id="notes-modify-form" onSubmit={(e) => { e.preventDefault(); this.modifyNote(); }}>
                            <FormGroup>
                                <Input
                                    innerRef={this.txtModifyNoteTitle}
                                    type="text"
                                    placeholder={t('notes.txt-title')}
                                    required
                                    autoFocus
                                    onKeyPress={(e) => {this.checkSpcialChar(e) ? null:e.preventDefault()}}
                                    value={this.state.titleNote}
                                    onChange={(e) => { this.setState({ titleNote: e.target.value }) }}
                                /><Input
                                    innerRef={this.txtModifyNoteDescription}
                                    type="text"
                                    placeholder={t('notes.txt-description')}
                                    required
                                    autoFocus
                                    onKeyPress={(e) => {this.checkSpcialChar(e) ? null:e.preventDefault()}}
                                    value={this.state.descriptionNote}
                                    onChange={(e) => { this.setState({ descriptionNote: e.target.value }) }}
                                /><DayPickerInput innerRef={this.dateModifyNote} 
                                    required 
                                    pattern="[0-9-]*"
                                    value={this.state.dateNote}
                                    onDayChange={day => { this.setState({ dateNote: day }) }}
                                />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" form="notes-modify-form" color="primary">{t('notes.btn-modify-note')}</Button>
                    </ModalFooter>
                </Modal>

                </Container>
                
            );

        }

}

export default Notes;
