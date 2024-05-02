import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Button, FormGroup, FormControl, Row, Col } from 'react-bootstrap';
import repairService from "../services/repair.service";
import vehicleService from '../services/vehicle.service';
import { FaSave } from 'react-icons/fa';

const AddBrandDiscount = () => {
    const [record, setRecord] = useState({
        amount: "",
        quantity: "",
        vehicleBrandId: ""
    });
    const navigate = useNavigate();

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        vehicleService.getBrands().then(response => {
            const filteredBrands = response.data.filter(brand => ['Toyota', 'Ford', 'Hyundai', 'Honda'].includes(brand.brand));
            setBrands(filteredBrands);
        }).catch(error => console.error("Error al cargar las marcas.", error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRecord(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const saveRecord = (e) => {
        e.preventDefault();
        const payload = {
            amount: parseFloat(record.amount),
            quantity: parseInt(record.quantity),
            vehicleBrand: { id: parseInt(record.vehicleBrandId) }
        };

        repairService.saveBrandDiscount(payload)
            .then(() => navigate("/brandDiscount/list"))
            .catch(error => console.error("Error al guardar el bono.", error));
    };

    return (
        <Container style={{ marginTop: "4rem", maxWidth: "800px" }}>
            <h3>Nuevo Bono</h3>
            <hr />
            <Form onSubmit={saveRecord}>
                <Row className="mb-3">
                    <Col md={6}>
                        <FormGroup>
                            <Form.Label>Cantidad</Form.Label>
                            <FormControl
                                type="number"
                                placeholder="Ingrese cantidad"
                                name="quantity"
                                value={record.quantity}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Form.Label>Monto</Form.Label>
                            <FormControl
                                type="number"
                                placeholder="Ingrese monto"
                                name="amount"
                                value={record.amount}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={12}>
                        <FormGroup>
                            <Form.Label>Marca del Vehículo</Form.Label>
                            <Form.Select
                                name="vehicleBrandId"
                                value={record.vehicleBrandId}
                                onChange={handleInputChange}
                            >
                                <option value="">Seleccione una marca...</option>
                                {brands.map((option) => (
                                    <option key={option.id} value={option.id}>{option.brand}</option>
                                ))}
                            </Form.Select>
                        </FormGroup>
                    </Col>
                </Row>
                <Button variant="primary" type="submit" className="mt-3">
                    <FaSave className="me-2" />Guardar
                </Button>
            </Form>
            <hr />
            <Link to="/brandDiscount/list">Volver a la Lista</Link>
        </Container>
    );
};

export default AddBrandDiscount;
