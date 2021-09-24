import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap"

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" id="navbar" className="shadow-sm px-5 py-2">
        <Navbar.Brand href="#home">WeatherApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Forecast</Nav.Link>
            <Nav.Link href="#link">Favorites</Nav.Link>
            <NavDropdown title="Select city" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Stockholm</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Helsinki</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Seoul</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Amsterdam</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Oslo</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Copenhagen</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button id="button" variant="outline-warning">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar