import React, { Component } from 'react';
import { Nav,Navbar, NavDropdown, Container } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div style={{margin:5}}>
<Navbar sticky="top" collapseOnSelect expand="lg"  variant="dark">
  <Container>
  <Navbar.Brand ><img style={{marginRight:0, height:40, width:120, top:0, left:0}} src="https://kylin.network/logoWhite.1cfda3b9.svg"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      <Nav style={{marginLeft:290, color:"white"}} className="justify-content-end" >
    <Nav.Item>
      <Nav.Link href="/#Techical">Technology</Nav.Link>
    </Nav.Item>
     <NavDropdown title="Docs" id="nav-dropdown">
        <NavDropdown.Item ><a href="https://wiki.kylin.network/">Project Wiki</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="https://docsend.com/view/rxexqc3cnjh3efz4"><a href="https://docsend.com/view/rxexqc3cnjh3efz4">Tokenomics</a></NavDropdown.Item>
        <NavDropdown.Item eventKey=""><a href="https://docsend.com/view/hqk2qvxi9j8irbq9">One Pager</a></NavDropdown.Item>
         <NavDropdown.Item eventKey=""><a href="https://docsend.com/view/i8jzismxqsmwmxuf">Overview Deck</a></NavDropdown.Item>
        <NavDropdown.Item ><a href="https://docsend.com/view/pabw88vupn7bas6k">Whitepaper</a></NavDropdown.Item>
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