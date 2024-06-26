import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavLogo } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">
          <h1>HuddleUp</h1>
        </NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to="about" activeStyle>
            About
          </NavLink>
          <NavLink to="services" activeStyle>
            Services
          </NavLink>
          <NavLink to="contact-us" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="sign-in" activeStyle>
            Sign In
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="sign-in">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar;
