import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/api/vehicles/');
}

const create = data => {
    return httpClient.post("/api/vehicles/", data);
}

const get = id => {
    return httpClient.get(`/api/vehicles/${id}`);
}

const update = data => {
    return httpClient.put('/api/vehicles/', data);
}

const remove = id => {
    return httpClient.delete(`/api/vehicles/${id}`);
}

const getBrands = () => {
    return httpClient.get('/api/vehicleBrands/')
}

const getTypes = () => {
    return httpClient.get('/api/vehicleTypes/')
}

const getEngines = () => {
    return httpClient.get('/api/vehicleEngines/')
}

export default { getAll, create, get, update, remove, getBrands, getTypes, getEngines };