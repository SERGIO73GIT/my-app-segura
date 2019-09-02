import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Form, FormGroup, Input, InputGroup, Button, Popover, PopoverBody, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { registerViewComponent, getViewComponent } from 'services/view-components.jsx';
import { t } from 'services/translation.jsx';
import { get, post } from 'services/rest.jsx';
import { changeLocation } from 'services/location.jsx';
import { modalMessage } from 'services/modal.jsx'; //importar a mano

//reactstrap

class Login extends Component {

    constructor(props) {

        // Props.
        super(props);

        // Register this view component.
        registerViewComponent('login', this);


        // Refs.
        this.txtUsername = React.createRef();
        
        // State.
        this.state = {

        };

    }



    render() {  // lo que queremos pintar

        return (
            <Container>

                <Col className="main-col"> 
                    <Jumbotron className="text-center">

                        <h3>{t('login.header')}</h3><hr />

                        <Form action="http://localhost:8080" >
                            <FormGroup className="group-spaced">
                                <Button type="submit" color="primary">{t('login.btn-login')}</Button>
                            </FormGroup>
                        </Form>

                    </Jumbotron>
                </Col>

            </Container>
        );

    }

}

export default Login;
