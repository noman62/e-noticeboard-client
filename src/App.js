import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Homepage from "./components/Homepage/Homepage";
import UpcomingNotice from "./components/UpcomingNotice/UpcomingNotice";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Deshboard from "./components/Deshboard/Deshboard";
import ManageNotice from "./components/ManageNotice/ManageNotice";
import AddNotice from "./components/AddNotice/AddNotice";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Deshboard" element={<Deshboard />} />

      {/* <Route path="/admin" element={<AddNotice/>} /> */}
      <Route path="/upcomingNotice" element={<UpcomingNotice />} />
      <Route path="/updateNotice" element={<ManageNotice/>} />
      <Route path="/form" element={<Form/>} />
    </Routes>
  </div>
  );
}

export default App;

