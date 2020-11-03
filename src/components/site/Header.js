import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
    return (
        <header>
            <Navbar className = "header">
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://github.com/AaronMiloLarsen/beastmaster48hour">Github
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;