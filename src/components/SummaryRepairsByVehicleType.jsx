import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import summaryService from "../services/summary.service";

const RepairsByVehicleTypeSummary = () => {
    const [summaryData, setSummaryData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await summaryService.repairsByVehicleType();
                console.log("Mostrando el reporte: ", response.data);
                setSummaryData(response.data);
            } catch (error) {
                console.error("Error al recuperar el reporte: ", error);
            }
        };
        fetchData();
    }, []);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CLP' }).format(amount);
    };

    return (
        <Container style={{ marginTop: "4rem" }}>
            <Row className="mb-3">
                <Col>
                    <h1>Reporte de Reparaciones por Tipo de Vehículo</h1>
                </Col>
            </Row>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Tipo de Reparación</th>
                        <th>Hatchback</th>
                        <th>SUV</th>
                        <th>Sedan</th>
                        <th>Pickup</th>
                        <th>Furgoneta</th>
                        <th>Monto total</th>
                    </tr>
                </thead>
                <tbody>
                    {summaryData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.repairType}</td>
                            <td>{item.hatchbackCount}</td>
                            <td>{item.suvCount}</td>
                            <td>{item.sedanCount}</td>
                            <td>{item.pickupCount}</td>
                            <td>{item.vanCount}</td>
                            <td>{formatCurrency(item.totalCost)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default RepairsByVehicleTypeSummary;
