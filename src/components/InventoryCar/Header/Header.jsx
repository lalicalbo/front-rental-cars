import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

import "./header.scss"

const Header = () => {
    return (
        <div>
            <Navbar className="header">
  <Container>
    <Navbar.Brand href="#home">BUGGY AND BUMPER, INC</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">XXXXXXX</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    )
}

export default Header
