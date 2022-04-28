import { BrowserRouter, Route, Routes } from "react-router-dom";
import './app.css'
import Dashboard from './pages/Dashboard';
import Tickets from './pages/Tickets';
import NavBar from './components/Nav/Navbar';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ticket" element={<Tickets />} />
          <Route path="/ticket/:id" element={<Tickets editMode={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
