import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './components/Home';
import VehicleList from './components/VehicleList';
import AddEditVehicle from './components/AddEditVehicle';
import RepairList from './components/RepairList'
import AddEditRepair from './components/AddEditRepair';
import RepairDetails from './components/RepairDetails';
import NotFound from './components/NotFound';
import RepairReport from './components/SummaryRepairDetails'
import RepairsByVehicleTypeSummary from './components/SummaryRepairsByVehicleType'
import AverageTimeByBrandReport from './components/SummaryAverageTimeByBrand';
import RepairsByEngineTypeSummary from './components/SummaryRepairsByEngineType';
import BrandDiscountList from './components/BrandDiscountList';
import AddBrandDiscount from './components/AddBrandDiscount';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vehicle/list" element={<VehicleList />} />
          <Route path="/vehicle/add" element={<AddEditVehicle />} />
          <Route path="/vehicle/edit/:id" element={<AddEditVehicle />} />
          <Route path="/repair/list" element={<RepairList />} />
          <Route path="/repair/add" element={<AddEditRepair />} />
          <Route path="/repair/edit/:id" element={<AddEditRepair />} />
          <Route path="/repair/details/:id" element={<RepairDetails />} />
          <Route path="/brandDiscount/list" element={<BrandDiscountList />} />
          <Route path="/brandDiscount/add" element={<AddBrandDiscount />} />
          <Route path="/summaries/repairDetails" element={<RepairReport />} />
          <Route path="/summaries/repairsByVehicleType" element={<RepairsByVehicleTypeSummary />} />
          <Route path="/summaries/averageTimeByBrand" element={<AverageTimeByBrandReport />} />
          <Route path="/summaries/repairsByEngineType" element={<RepairsByEngineTypeSummary />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App
