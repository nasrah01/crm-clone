import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from 'react'
import './app.css'
import Dashboard from './pages/Dashboard'
import Tickets from './pages/Tickets'
import NavBar from './components/Nav/Navbar'
import CategoryContext from "./context"

const App = () => {

  const [categories, setCategories] = useState(null)
  const value = {categories, setCategories}

  return (
    <div className="App">
      <CategoryContext.Provider value={value}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ticket" element={<Tickets />} />
            <Route path="/ticket/:id" element={<Tickets editMode={true} />} />
          </Routes>
        </BrowserRouter>
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
