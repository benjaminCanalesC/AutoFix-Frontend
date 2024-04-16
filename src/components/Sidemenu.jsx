import React from 'react';
import { Offcanvas, ListGroup } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function Sidemenu({ open, toggleDrawer }) {
    const navigate = useNavigate();

    const handleClose = () => toggleDrawer(false);

    return (
        <Offcanvas show={open} onHide={handleClose} placement="start">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" action onClick={() => {
                        handleClose();
                        navigate("/home");
                    }}>
                        <i className="fas fa-home"></i> Home
                    </ListGroup.Item>
                    <ListGroup.Item as="li" action onClick={() => {
                        handleClose();
                        navigate("/vehicle/list");
                    }}>
                        <i className="fas fa-car"></i> Vehículos
                    </ListGroup.Item>
                    <ListGroup.Item as="li" action onClick={() => {
                        handleClose();
                        navigate("/repair/list");
                    }}>
                        <i className="fas fa-tools"></i> Reparaciones
                    </ListGroup.Item>
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
