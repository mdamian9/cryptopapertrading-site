import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Logo from './Logo';

const LogoNavbar = () => {
    return (
        <div className="centered-nav text-center">
            <Navbar color="light" light expand="md">
                <div className="navbar-header">
                    <NavbarBrand href="/">
                        <Logo />
                    </NavbarBrand>
                </div>
            </Navbar>
        </div>
    );
};

export default LogoNavbar;
