import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import summaryService from "../services/summary.service";

const RepairsByVehicleTypeSummary = () => {
    const [summaryData, setSummaryData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await summaryService.repairsByVehicleType();
                console.log("Fetched summary data: ", response.data);
                setSummaryData(response.data);
            } catch (error) {
                console.error("Error fetching summary data: ", error);
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
                    <h1>Reporte de Resumen por Tipo de Vehiculo</h1>
                </Col>
            </Row>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Tipo de Reparación</th>
                        <th>Tipo de Vehículo</th>
                        <th>Cantidad de Vehículos</th>
                        <th>Costo Total</th>
                    </tr>
                </thead>
                <tbody>
                    {summaryData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.repairType}</td>
                            <td>{item.vehicleType}</td>
                            <td>{item.vehicleCount}</td>
                            <td>{formatCurrency(item.totalCost)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default RepairsByVehicleTypeSummary;
