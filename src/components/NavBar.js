import { NavBar, Container, NavDropdown} from "react-bootstrap"

export const NavBar = () => {
    return (
        <NavBar expand="lg">
            <Container>
                <NavBar.Brand href="#home">

                </NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav" / >
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Action2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Action3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </NavBar.Collapse>
            </Container>
        </NavBar>
    )
}