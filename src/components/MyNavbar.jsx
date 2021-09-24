import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

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