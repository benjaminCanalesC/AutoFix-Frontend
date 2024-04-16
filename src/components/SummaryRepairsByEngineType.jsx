import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import summaryService from "../services/summary.service";

const RepairsByEngineTypeSummary = () => {
    const [engineData, setEngineData] = useState([]);

    useEffect(() => {
        summaryService.repairsByEngineType()
            .then(response => {
                console.log("Fetched repairs by engine type data:", response.data);
                setEngineData(response.data);
            })
            .catch(error => {
                console.error("Error fetching repairs by engine type data:", error);
            });
    }, []);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CLP' }).format(amount);
    };

    return (
        <Container style={{ marginTop: "4rem" }}>
            <h2>Reporte de Reparaciones por Tipo de Motor</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Tipo de Reparación</th>
                        <th>Tipo de Motor</th>
                        <th>Número de Vehículos</th>
                        <th>Monto Total</th>
                    </tr>
                </thead>
                <tbody>
                    {engineData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.repairType}</td>
                            <td>{item.engineType}</td>
                            <td>{item.numberOfVehicles}</td>
                            <td>{formatCurrency(item.totalAmount)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default RepairsByEngineTypeSummary;
