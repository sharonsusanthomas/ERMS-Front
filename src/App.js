import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login'; // Adjust the path if necessary
import Home from './components/pages/Home'; // Adjust the path if necessary
import AdminDashboard from './components/pages/AdminDashboard'; // Adjust the path if necessary
import HoDDashboard from './components/pages/HoDDashboard'; // Adjust the path if necessary
import StaffDashboard from './components/pages/StaffDashboard'; // Adjust the path if necessary
// import AddStaff from './components/AddStaff'; // Uncomment and adjust paths if necessary
// import ViewStaff from './components/ViewStaff'; // Uncomment and adjust paths if necessary
// import UpdateStaff from './components/UpdateStaff'; // Uncomment and adjust paths if necessary

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hod-dashboard" element={<HoDDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/staff-dashboard" element={<StaffDashboard />} />
          
          {/* Uncomment and adjust paths for other routes as needed */}
          {/* <Route path="/add-staff" element={<AddStaff />} /> */}
          {/* <Route path="/view-staff" element={<ViewStaff />} /> */}
          {/* <Route path="/update-staff/:id" element={<UpdateStaff />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
