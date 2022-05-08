import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Homepage from "./components/Homepage/Homepage";
import LatestNotice from "./components/LatestNotice/LatestNotice";
import UpcomingNotice from "./components/UpcomingNotice/UpcomingNotice";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Deshboard from "./components/Deshboard/Deshboard";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Deshboard" element={<Deshboard />} />

      {/* <Route path="dashboard/latestNews" element={<LatestNotice />} />
      <Route path="dashboard/upcomingNews" element={<UpcomingNotice />} /> */}
    </Routes>
  </div>
  );
}

export default App;

