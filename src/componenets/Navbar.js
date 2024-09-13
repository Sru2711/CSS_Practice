import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';  // Import NavLink for navigation
import '../style/navbar.scss';
import cssdesign from "../assets/cssdesign.png";
import { routesArray } from './router';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" className="navbar">
      <NavbarBrand href="/" className="navbar-brand">
        <img src={cssdesign} className="img" />
        <h5 className="cssbrand mx-2 my-0">CSS PRACTICE</h5>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="navbardropdown">
          <UncontrolledDropdown>
            <DropdownToggle className="toggle-dropdown">
              Options
            </DropdownToggle>
            <DropdownMenu className="menu" right>
              <DropdownItem className="item">
                <NavLink to="/" className="link">Home</NavLink>
              </DropdownItem>
              {routesArray.map((option) => (
                <DropdownItem key={option.link} className="item">
                  <NavLink to={option.link} className="link">{option.componenetName}</NavLink> 
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
