import React, {Component} from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import {Archive, ArrowRightSquare, Envelope, Gear, PersonCircle} from 'react-bootstrap-icons';

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Sun Cloud Storage</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#features">Getting started</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="light">Search</Button>
                        </Form>
                    </Nav>
                    <Nav>
                        <DropdownButton
                            alignRight
                            variant="none"
                            title={<PersonCircle color="white" size="32" />}
                            id="dropdown-menu-align-right"
                        >
                            <Dropdown.Header>Signed in as: <strong>Mark Otto</strong></Dropdown.Header>
                            <Dropdown.Divider/>
                            <Dropdown.Item eventKey="1"><Envelope/> Profile</Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Archive/> Your files</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item eventKey="3"><Gear/> Settings</Dropdown.Item>
                            <Dropdown.Item eventKey="4"><ArrowRightSquare/> Logout</Dropdown.Item>
                        </DropdownButton>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
