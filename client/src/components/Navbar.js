import React, { Component } from 'react';
import Logo from './Logo';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class NavbarComponent extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    };

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/home"><Logo /></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/trade-log">Trade Log</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                New Trade
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href="/new-entry-trade">
                                        New Entry Trade
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/new-exit-trade">
                                        New Exit Trade
                                    </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Menu
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Tutorial
                                </DropdownItem>
                                <DropdownItem>
                                    My Account
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink href="/">Log Out</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    };
};

export default NavbarComponent;
