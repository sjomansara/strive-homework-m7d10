import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container } from "react-bootstrap"

const MiddleBar = () => {
    return (
        <Navbar expand="lg" id="middleBar" className="border-bottom mx-5 mb-4">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Hourly</Nav.Link>
            <Nav.Link href="#link">Daily</Nav.Link>
            <Nav.Link href="#link">Monthly</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default MiddleBar