import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { NavLink as RRNavLink } from "react-router-dom"
import { registerViewComponent, getViewComponent } from 'services/view-components.jsx';
import { t } from 'services/translation.jsx';
import { updateSessionInfo, sessionUsername, sessionRoles, logout } from 'services/session.jsx';

class NavigationBar extends Component {

    constructor(props) {

        // Props.
        super(props);

        // Register this view component.
        registerViewComponent('navigationBar', this);

        // Functions binding to this.
        this.toggleNavbarToggler = this.toggleNavbarToggler.bind(this);

        // State.
        this.state = {
            navbarTogglerActive: false,
            username: '',
            role: ''
        };

    }

    componentDidMount() {

        updateSessionInfo({
            callback: () => {

                this.setState({
                    username: sessionUsername(),
                    role: sessionRoles()[0]
                });

            }
        });

    }

    toggleNavbarToggler() {

        this.setState({
            navbarTogglerActive: !this.state.navbarTogglerActive
        });

    }

    render() {

        return (
            <div>
                <Navbar color="light" light expand="md" style={{ marginBottom: "3rem" }}>

                    <NavbarBrand>{t('navigation-bar.brand')}</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbarToggler} />

                    <Collapse isOpen={this.state.navbarTogglerActive} navbar>

                        {
                            this.state.role == 'ROLE_USER' ?
                                <Nav className="mr-auto" navbar>
                                    <NavItem><NavLink tag={RRNavLink} to={'/notes'} activeClassName="active">{t('navigation-bar.notes')}</NavLink></NavItem>
                                </Nav>
                                : null
                        }

                        {
                            this.state.role == 'ROLE_ADMIN' ?
                                <Nav className="mr-auto" navbar>
                                    <NavItem><NavLink tag={RRNavLink} to={'/notes'} activeClassName="active">{t('navigation-bar.notes')}</NavLink></NavItem>
                                </Nav>
                                : null
                        }

                        <Nav className="ml-auto" navbar>
                            <NavItem><NavLink tag={RRNavLink} to='/' activeClassName="active">{this.state.username}</NavLink></NavItem>
                            <div className="form-inline"><Button color="secondary" size="sm" onClick={logout}>{t('navigation-bar.logout')}</Button></div>
                        </Nav>

                    </Collapse>

                </Navbar>
            </div>
        );

    }

}

export default NavigationBar;
