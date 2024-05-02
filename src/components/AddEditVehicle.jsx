import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, Form, Button, FormGroup, FormControl, Row, Col } from 'react-bootstrap';
import vehicleService from "../services/vehicle.service";
import { FaSave } from 'react-icons/fa';

const AddEditVehicle = () => {
    const [vehicle, setVehicle] = useState({
        plate: "",
        model: "",
        fabricationYear: "",
        mileage: "",
        seats: "",
        vehicleBrandId: "",
        vehicleEngineId: "",
        vehicleTypeId: "",
    });
    const { id } = useParams();
    const navigate = useNavigate();

    const [brands, setBrands] = useState([]);
    const [engines, setEngines] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        vehicleService.getBrands().then(response => setBrands(response.data));
        vehicleService.getEngines().then(response => setEngines(response.data));
        vehicleService.getTypes().then(response => setTypes(response.data));

        if (id) {
            vehicleService.get(id).then(response => {
                const { vehicleBrand, vehicleEngine, vehicleType, ...vehicleBody } = response.data;
                setVehicle({
                    ...vehicleBody,
                    vehicleBrandId: vehicleBrand.id,
                    vehicleEngineId: vehicleEngine.id,
                    vehicleTypeId: vehicleType.id
                });
            }).catch(error => console.error("Error al intentar acceder a los detalles del vehículo.", error));
        }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = name === 'plate' ? value.toUpperCase() : value;
        setVehicle(prev => ({
            ...prev,
            [name]: updatedValue
        }));
    };

    const saveVehicle = (e) => {
        e.preventDefault();
        const { vehicleBrandId, vehicleEngineId, vehicleTypeId, ...rest } = vehicle;
        const payload = {
            ...rest,
            vehicleBrand: { id: parseInt(vehicleBrandId) },
            vehicleEngine: { id: parseInt(vehicleEngineId) },
            vehicleType: { id: parseInt(vehicleTypeId) }
        };

        const serviceCall = id ? vehicleService.update({ id: parseInt(id), ...payload }) : vehicleService.create(payload);
        serviceCall
            .then(response => {
                navigate("/vehicle/list");
            })
            .catch(error => {
                console.error("Error al guardar el vehículo.", error);
            });
    };

    return (
        <Container style={{ marginTop: "4rem", maxWidth: "800px" }}>
            <h3>{id ? "Editar Vehículo" : "Nuevo Vehículo"}</h3>
            <hr />
            <Form onSubmit={saveVehicle}>
                <Row className="mb-3">
                    <Col md={6}>
                        <FormGroup>
                            <Form.Label>Patente</Form.Label>
                            <FormControl
                                type="text"
                                placeholder="Ej: ABCD12"
                                name="plate"
                                value={vehicle.plate}
                                onChange={handleInputChange}
                                maxLength="6"
                                readOnly={!!id}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Form.Label>Modelo</Form.Label>
                            <FormControl
                                type="text"
                                placeholder="Indique modelo"
                                name="model"
                                value={vehicle.model}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Marca</Form.Label>
                            <Form.Select
                                name="vehicleBrandId"
                                value={vehicle.vehicleBrandId}
                                onChange={handleInputChange}
                            >
                                <option value="">Marcas...</option>
                                {brands.map((option) => (
                                    <option key={option.id} value={option.id}>{option.brand}</option>
                                ))}
                            </Form.Select>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Motor</Form.Label>
                            <Form.Select
                                name="vehicleEngineId"
                                value={vehicle.vehicleEngineId}
                                onChange={handleInputChange}
                            >
                                <option value="">Motores...</option>
                                {engines.map((option) => (
                                    <option key={option.id} value={option.id}>{option.engine}</option>
                                ))}
                            </Form.Select>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Tipo</Form.Label>
                            <Form.Select
                                name="vehicleTypeId"
                                value={vehicle.vehicleTypeId}
                                onChange={handleInputChange}
                            >
                                <option value="">Tipos...</option>
                                {types.map((option) => (
                                    <option key={option.id} value={option.id}>{option.type}</option>
                                ))}
                            </Form.Select>
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6}>
                        <FormGroup>
                            <Form.Label>Año fabricación</Form.Label>
                            <FormControl
                                type="text"
                                placeholder="Indique año"
                                name="fabricationYear"
                                value={vehicle.fabricationYear}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Form.Label>Kilometraje</Form.Label>
                            <FormControl
                                type="text"
                                placeholder="Indique kilometraje"
                                name="mileage"
                                value={vehicle.mileage}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6}>
                        <FormGroup>
                            <Form.Label>Asientos</Form.Label>
                            <FormControl
                                type="text"
                                placeholder="Numero de asientos"
                                name="seats"
                                value={vehicle.seats}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Button variant="primary" type="submit" className="mt-3">
                    <FaSave className="me-2" />Guardar
                </Button>
            </Form>
            <hr />
            <Link to="/vehicle/list">Volver a la Lista</Link>
        </Container>
    );
};

export default AddEditVehicle;

