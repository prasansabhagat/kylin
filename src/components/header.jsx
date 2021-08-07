import React, { Component } from 'react';
import { Nav,Navbar, NavDropdown, Container } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div>
<Navbar sticky="top" collapseOnSelect expand="lg"  variant="dark">
  <Container>
  <Navbar.Brand  href="#home"><img style={{marginRight:320, height:80, width:120, top:0, left:0}} src="https://kylin.network/logoWhite.1cfda3b9.svg"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      <Nav style={{marginLeft:290, color:"white"}} className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/#Techical">Technology</Nav.Link>
    </Nav.Item>
     <NavDropdown title="Docs" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1"><a href="https://wiki.kylin.network/"></a></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Tokenomics</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">One Pager</NavDropdown.Item>
         <NavDropdown.Item eventKey="4.3">Overview Deck</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">Whitepaper</NavDropdown.Item>
      </NavDropdown>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Token</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Ecosystem</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-3">Dao</Nav.Link>
    </Nav.Item>
     <NavDropdown title="Tools" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Github</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Api Docs</NavDropdown.Item>
      </NavDropdown>
  </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        )
    }
}