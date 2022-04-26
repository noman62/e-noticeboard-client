import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Homepage from "./components/Homepage/Homepage";
import LatestNotice from "./components/LatestNotice/LatestNotice";
import UpcomingNotice from "./components/UpcomingNotice/UpcomingNotice";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard/latestNews" element={<LatestNotice />} />
      <Route path="dashboard/upcomingNews" element={<UpcomingNotice />} />
    </Routes>
  </div>
  );
}

export default App;

