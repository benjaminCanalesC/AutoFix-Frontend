import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/api/repairs/');
}

const create = data => {
    return httpClient.post("/api/repairs/", data);
}

const get = id => {
    return httpClient.get(`/api/repairs/${id}`);
}

const update = data => {
    return httpClient.put('/api/repairs/', data);
}

const remove = id => {
    return httpClient.delete(`/api/repairs/${id}`);
}

const getRepairTypes = () => {
    return httpClient.get('/api/repairTypes/');
}

const saveBrandDiscount = data => {
    return httpClient.post("/api/brandDiscounts/", data);
}

const getBrandDiscounts = () => {
    return httpClient.get("/api/brandDiscounts/");
}

export default { getAll, create, get, update, remove, getRepairTypes, saveBrandDiscount, getBrandDiscounts };