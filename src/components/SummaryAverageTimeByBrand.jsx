import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import summaryService from "../services/summary.service";

const AverageTimeByBrandReport = () => {
    const [reportData, setReportData] = useState([]);

    useEffect(() => {
        summaryService.averageTimeByBrandReport()
            .then(response => {
                console.log("Mostrando el reporte:", response.data);
                setReportData(response.data);
            })
            .catch(error => {
                console.error("Error al recuperar el reporte:", error);
            });
    }, []);

    const formatTime = (hours) => {
        return `${hours.toFixed(2)} horas`;
    };

    return (
        <Container style={{ marginTop: '4rem', maxWidth: '100%' }}>
            <h2>Tiempo Promedio de Reparación por Marca</h2>
            <Table striped bordered hover size="sm">
                <thead className="thead-dark">
                    <tr>
                        <th>Marca</th>
                        <th>Tiempo promedio (horas)</th>
                    </tr>
                </thead>
                <tbody>
                    {reportData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.brand}</td>
                            <td>{formatTime(item.averageRepairTime)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default AverageTimeByBrandReport;
