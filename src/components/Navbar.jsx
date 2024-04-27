import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Sidemenu from './Sidemenu';

export default function NavigationBar() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (isOpen) => {
        setOpen(isOpen);
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => toggleDrawer(true)}>
                            <i className="fas fa-bars"></i>
                        </Nav.Link>
                    </Nav>
                    <Navbar.Brand href="/home" className="mx-auto" style={{ transform: "translateX(-150px)" }}>
                        AutoFix: Tu vehículo en las mejores manos
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <Sidemenu open={open} toggleDrawer={toggleDrawer} />
        </>
    );
}

