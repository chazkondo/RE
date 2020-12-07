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
  const { isLandingPage, island, selectIsland, changeIsland } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      style={{
        position: isLandingPage ? 'absolute' : null,
        zIndex: 1,
        width: '100%',
        padding: '18px',
        marginTop: '5px',
        // backgroundColor: "rgba(255,255,255,0.75)",
      }}
    >
      <Navbar
        style={{
          backgroundColor: 'rgba(0,0,0,0) !important',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
        color={isLandingPage ? 'dark' : 'light'}
        dark={isLandingPage ? true : false}
        light={isLandingPage ? false : true}
        expand="md"
      >
        <NavbarBrand style={{ paddingLeft: '20px' }} href="/">
          Hawaii xHomes
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={{ paddingRight: '30px' }} className="ml-auto" navbar>
            <UncontrolledDropdown style={{ paddingRight: '30px' }} nav inNavbar>
              <DropdownToggle
                style={{ color: isLandingPage ? 'white' : 'black' }}
                data-placement="bottom"
                nav
                caret
              >
                Real Estate
              </DropdownToggle>
              <DropdownMenu right>
                <Link href="/" as="/realestate/kauai">
                  <DropdownItem onClick={() => changeIsland('Kauai')}>
                    Kauai
                  </DropdownItem>
                </Link>
                <Link href="/" as="/realestate/molokai">
                  <DropdownItem onClick={() => changeIsland('Molokai')}>
                    Molokai
                  </DropdownItem>
                </Link>
                <DropdownItem onClick={() => changeIsland('Oahu')}>
                  Oahu
                </DropdownItem>
                <DropdownItem onClick={() => changeIsland('Lanai')}>
                  Lanai
                </DropdownItem>
                <DropdownItem onClick={() => changeIsland('Maui')}>
                  Maui
                </DropdownItem>
                <DropdownItem onClick={() => changeIsland('Big Island')}>
                  Big Island
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown style={{ paddingRight: '30px' }} nav inNavbar>
              <DropdownToggle
                style={{ color: isLandingPage ? 'white' : 'black' }}
                data-placement="bottom"
                nav
                caret
              >
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
              <NavLink
                style={{ color: isLandingPage ? 'white' : 'black' }}
                href="https://github.com/reactstrap/reactstrap"
              >
                News
              </NavLink>
            </NavItem>
            <NavItem style={{ paddingRight: '30px' }}>
              <NavLink
                style={{ color: isLandingPage ? 'white' : 'black' }}
                onClick={() => selectIsland('Kauai')}
              >
                Login
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
