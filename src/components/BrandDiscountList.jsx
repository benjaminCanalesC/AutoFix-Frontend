import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Table, Button, Form, Row, Col } from 'react-bootstrap';
import { BsPencilSquare } from "react-icons/bs";
import repairService from "../services/repair.service";

const BrandDiscountList = () => {
    const [discounts, setDiscounts] = useState([]);

    useEffect(() => {
        loadDiscounts();
    }, []);

    const loadDiscounts = () => {
        repairService.getBrandDiscounts()
            .then((response) => {
                console.log("Mostrando el listado de descuentos de reparación.", response.data);
                setDiscounts(response.data);
            })
            .catch((error) => {
                console.log("Se ha producido un error al intentar obtener los descuentos de reparación.", error);
            });
    };

    return (
        <Container style={{ marginTop: '4rem', maxWidth: '100%' }}>
            <h1>Bonos</h1>
            <Row className="mb-3">
                <Col>
                    <Link to="/brandDiscount/add" className="btn btn-primary mb-2">
                        <BsPencilSquare /> Añadir Bono
                    </Link>
                </Col>
            </Row>
            <Table striped bordered hover size="sm">
                <thead className="thead-dark">
                    <tr>
                        <th>Marca de Vehículo</th>
                        <th>Cantidad</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {discounts.map((discount, index) => (
                        <tr key={index}>
                            <td>{discount.vehicleBrand.brand}</td>
                            <td>{discount.quantity}</td>
                            <td>{discount.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default BrandDiscountList;
