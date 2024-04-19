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
                        <th>Gasolina</th>
                        <th>Diesel</th>
                        <th>Hibrido</th>
                        <th>Electrico</th>
                        <th>Monto Total</th>
                    </tr>
                </thead>
                <tbody>
                    {engineData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.repairType}</td>
                            <td>{item.gasolineCount}</td>
                            <td>{item.dieselCount}</td>
                            <td>{item.hybridCount}</td>
                            <td>{item.electricCount}</td>
                            <td>{formatCurrency(item.totalCost)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default RepairsByEngineTypeSummary;
