import React, { useState } from 'react';
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
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import Link from 'next/link';

const Navigation = (props) => {
  const { island, selectIsland } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ backgroundColor: 'red' }}>
      <Navbar color="light" light expand="md">
        <NavbarBrand style={{ paddingLeft: '20px' }} href="/">
          xHawaii Homes
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={{ paddingRight: '30px' }} className="ml-auto" navbar>
            <UncontrolledDropdown style={{ paddingRight: '30px' }} nav inNavbar>
              <DropdownToggle data-placement="bottom" nav caret>
                Real Estate
              </DropdownToggle>
              <DropdownMenu right>
                <Link href="/" as="/realestate/kauai">
                  <DropdownItem onClick={() => selectIsland('Kauai')}>
                    Kauai
                  </DropdownItem>
                </Link>
                <Link href="/" as="/realestate/molokai">
                  <DropdownItem onClick={() => selectIsland('Molokai')}>
                    Molokai
                  </DropdownItem>
                </Link>
                <DropdownItem onClick={() => selectIsland('Oahu')}>
                  Oahu
                </DropdownItem>
                <DropdownItem onClick={() => selectIsland('Lanai')}>
                  Lanai
                </DropdownItem>
                <DropdownItem onClick={() => selectIsland('Maui')}>
                  Maui
                </DropdownItem>
                <DropdownItem onClick={() => selectIsland('Big Island')}>
                  Big Island
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown style={{ paddingRight: '30px' }} nav inNavbar>
              <DropdownToggle data-placement="bottom" nav caret>
                Rentals
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={() => selectIsland('Vacation Rentals')}>
                  Vacation Rentals
                </DropdownItem>
                <DropdownItem onClick={() => selectIsland('Long Term Rentals')}>
                  Long Term Rentals
                </DropdownItem>
                <DropdownItem
                  onClick={() => selectIsland('Property Management')}
                >
                  Property Management
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem style={{ paddingRight: '30px' }}>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                News
              </NavLink>
            </NavItem>
            <NavItem style={{ paddingRight: '30px' }}>
              <NavLink onClick={() => selectIsland('Kauai')}>Login</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
