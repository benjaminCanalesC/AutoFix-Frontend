import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import vehicleService from "../services/vehicle.service";
import { Button, Table, Container } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);
    const navigate = useNavigate();

    const init = () => {
        vehicleService
            .getAll()
            .then((response) => {
                console.log("Mostrando el listado de todos los vehiculos.", response.data);
                setVehicles(response.data);
            })
            .catch((error) => {
                console.log(
                    "Se ha producido un error al intentar mostrar listado de todos los vehículos.",
                    error
                );
            });
    };

    useEffect(() => {
        init();
    }, []);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("¿Está seguro que desea borrar este vehículo?");
        if (confirmDelete) {
            vehicleService
                .remove(id)
                .then((response) => {
                    console.log("Vehículo ha sido eliminado.", response.data);
                    init();
                })
                .catch((error) => {
                    console.log("Se ha producido un error al intentar eliminar al vehículo", error);
                });
        }
    };

    const handleEdit = (id) => {
        navigate(`/vehicle/edit/${id}`);
    };

    return (
        <Container style={{ marginTop: '4rem', maxWidth: '100%' }}>
            <Link to="/vehicle/add" className="btn btn-primary mb-2">
                <BsPencilSquare /> Añadir Vehículo
            </Link>
            <Table striped bordered hover size="sm">
                <thead className="thead-dark">
                    <tr>
                        <th>Placa</th>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Motor</th>
                        <th>Tipo</th>
                        <th>Año fabricación</th>
                        <th>Kilometraje</th>
                        <th>Asientos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle) => (
                        <tr key={vehicle.id}>
                            <td>{vehicle.plate}</td>
                            <td>{vehicle.model}</td>
                            <td>{vehicle.vehicleBrand.brand}</td>
                            <td>{vehicle.vehicleEngine.engine}</td>
                            <td>{vehicle.vehicleType.type}</td>
                            <td>{vehicle.fabricationYear}</td>
                            <td>{vehicle.mileage}</td>
                            <td>{vehicle.seats}</td>
                            <td>
                                <Button
                                    variant="info"
                                    size="sm"
                                    onClick={() => handleEdit(vehicle.id)}
                                    className="me-2"
                                >
                                    Editar
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(vehicle.id)}
                                >
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default VehicleList;
