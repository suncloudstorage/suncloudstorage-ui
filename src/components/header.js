import React, {Component} from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import {Archive, ArrowRightSquare, Envelope, Gear, PersonCircle} from 'react-bootstrap-icons';
import {Link} from "react-router-dom";
import userService from "../services/userService";

class Header extends Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Sun Cloud Storage</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-between">
                    <Nav>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/starts">Getting started</Nav.Link>
                        <Nav.Link href="/price">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="light">Search</Button>
                        </Form>
                    </Nav>
                    {localStorage.getItem("username")
                        ? <Nav>
                            <DropdownButton
                                alignRight
                                variant="none"
                                title={<PersonCircle color="white" size="32"/>}
                                id="dropdown-menu-align-right"
                            >
                                <Dropdown.Header>Signed in
                                    as: <strong>{localStorage.getItem("username")}</strong></Dropdown.Header>
                                <Dropdown.Divider/>
                                <Dropdown.Item eventKey="1" href="/profile"><Envelope/> Profile</Dropdown.Item>
                                <Dropdown.Item eventKey="2" href="/disk"><Archive/> Your files</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item eventKey="3" href="/settings"><Gear/> Settings</Dropdown.Item>
                                <Dropdown.Item eventKey="4" onClick={userService.logout}><ArrowRightSquare/> Logout</Dropdown.Item>
                            </DropdownButton>
                        </Nav>
                        : <Nav>
                            <Link to="/login"><Button variant="outline-light" className="mr-sm-2" >Sign In</Button></Link>
                            <Link to="/registartion"><Button variant="outline-light">Sign Up</Button></Link>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
