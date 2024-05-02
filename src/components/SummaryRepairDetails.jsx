import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import summaryService from "../services/summary.service";

const RepairReport = () => {
    const [repairs, setRepairs] = useState([]);

    useEffect(() => {
        summaryService.repairDetails()
            .then(response => {
                console.log("Mostrando el reporte: ", response.data);
                setRepairs(response.data);
            })
            .catch(error => {
                console.error("Error al recuperar el reporte: ", error);
            });
    }, []);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CLP' }).format(amount);
    };

    return (
        <Container style={{ marginTop: "4rem", maxWidth: '100%' }}>
            <h2>Reporte Detallado de Reparaciones</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Patente Vehículo</th>
                        <th>Costo Base</th>
                        <th>Descuento</th>
                        <th>Recargo</th>
                        <th>IVA</th>
                        <th>Costo Total</th>
                    </tr>
                </thead>
                <tbody>
                    {repairs.map((repair, index) => (
                        <tr key={index}>
                            <td>{repair.plate}</td>
                            <td>{formatCurrency(repair.baseRepairCost)}</td>
                            <td>{formatCurrency(repair.discount)}</td>
                            <td>{formatCurrency(repair.surcharge)}</td>
                            <td>{formatCurrency(repair.iva)}</td>
                            <td>{formatCurrency(repair.totalCost)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default RepairReport;
