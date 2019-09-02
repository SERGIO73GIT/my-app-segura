import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Form, FormGroup, Input, InputGroup, Button, Popover, PopoverBody, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { registerViewComponent, getViewComponent } from 'services/view-components.jsx';
import { t } from 'services/translation.jsx';
import { get, post } from 'services/rest.jsx';
import { changeLocation } from 'services/location.jsx';
import { modalMessage } from 'services/modal.jsx';
import DayPicker from 'react-daypicker';


class Dummy extends Component {

    constructor(props) {

        // Props.
        super(props);

        // Register this view component.
        registerViewComponent('dummy', this);

        // Functions binding to this.

        // Refs.

        // State.
        this.state = {
                day: new Date()
        };

    }

    render() {

        return (
            <Container>

                <h4>Dummy</h4><hr />


            </Container>
        );

    }

}

export default Dummy;
