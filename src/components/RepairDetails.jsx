import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";
import repairService from "../services/repair.service";

const RepairDetails = () => {
    const { id } = useParams();
    const [repair, setRepair] = useState(null);

    useEffect(() => {
        repairService.get(id)
            .then(response => {
                console.log("Detalles de la reparación:", response.data);
                setRepair(response.data);
            })
            .catch(error => {
                console.error("Error al obtener los detalles de la reparación:", error);
            });
    }, [id]);

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Intl.DateTimeFormat('es-ES', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            hour12: false
        }).format(new Date(dateString));
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CLP' }).format(amount);
    };

    return (
        <Card style={{ margin: '20px', marginTop: '6rem', flexDirection: 'row' }}>
            <Card.Body>
                {repair ? (
                    <>
                        <Card.Title>Detalles de la Reparación</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item><strong>ID de Reparación:</strong> {repair.id}</ListGroup.Item>
                            <ListGroup.Item><strong>Patente:</strong> {repair.vehicle.plate}</ListGroup.Item>
                            <ListGroup.Item><strong>Tipo de Reparación:</strong> {repair.repairType?.repairType}</ListGroup.Item>
                            <ListGroup.Item><strong>Entrada:</strong> {formatDate(repair.entryDateTime)}</ListGroup.Item>
                            <ListGroup.Item><strong>Salida:</strong> {formatDate(repair.exitDateTime)}</ListGroup.Item>
                            <ListGroup.Item><strong>Recogida:</strong> {formatDate(repair.pickupDateTime)}</ListGroup.Item>
                            <ListGroup.Item><strong>Descuento Bonus:</strong> {repair.bonusDiscount ? "Sí" : "No"}</ListGroup.Item>
                        </ListGroup>
                    </>
                ) : (
                    <Card.Text>Cargando detalles de la reparación...</Card.Text>
                )}
            </Card.Body>
            <Card.Body>
                {repair ? (
                    <>
                        <Card.Title>Desglose costos</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item><strong>Costo Base Reparación:</strong> {formatCurrency(repair.baseRepairCost)}</ListGroup.Item>
                            <ListGroup.Item><strong>Descuentos:</strong> {formatCurrency(repair.discount)}</ListGroup.Item>
                            <ListGroup.Item><strong>Recargos:</strong> {formatCurrency(repair.surcharge)}</ListGroup.Item>
                            <ListGroup.Item><strong>Iva:</strong> {formatCurrency(repair.iva)}</ListGroup.Item>
                            <ListGroup.Item><strong>Valor de la Reparación:</strong> {formatCurrency(repair.repairCost)}</ListGroup.Item>
                        </ListGroup>
                    </>
                ) : (
                    <Card.Text>Cargando detalles de la reparación...</Card.Text>
                )}
            </Card.Body>
        </Card>
    );
};

export default RepairDetails;
