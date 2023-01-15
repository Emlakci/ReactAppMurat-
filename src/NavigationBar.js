import React from 'react';
import styles from './navigationBar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavigationBar() {
  return (
    <Navbar className={styles.navi} expand="lg">
          <Container className="d-flex justify-content-between" >
            <Navbar.Brand className={styles.navBrand} href="App.js"><img
                  src="/img/marmelat.png"
                  width="30%"
                  height=""
                  className="me-2"
                  alt=""
                />MARMELAT BUTİK PASTA 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='collapseMenu' id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className={styles.hmbrger} href="App.js">Anasayfa</Nav.Link>
                <Nav.Link className={styles.hmbrger} href="#link">Hakkımda</Nav.Link>
                <NavDropdown className={styles.hmbrger} title="İletişim" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Ürünlerim</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">İnstagram</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Facebook</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
    </Navbar>  

  );
}

export default NavigationBar