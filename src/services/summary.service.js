import httpClient from "../http-common";

const averageTimeByBrandReport = () => {
    return httpClient.get('/api/summaries/averageTimeByBrandReport');
}

const repairsByEngineType = () => {
    return httpClient.get('/api/summaries/repairsByEngineType');
}

const repairDetails = () => {
    return httpClient.get('/api/summaries/repairDetails');
}

const repairsByVehicleType = () => {
    return httpClient.get('/api/summaries/repairsByVehicleType');
}


export default { averageTimeByBrandReport, repairDetails, repairsByEngineType, repairsByVehicleType };