import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import { Routes, Route } from 'react-router-dom'
import { createContext } from "react";
import { useState } from "react";


export const GlobalData = createContext();
function App() {
  const [theam, setTheam] = useState(false);
  return (
    <GlobalData.Provider value={{ theam: theam, setTheam: setTheam }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </div>
    </GlobalData.Provider >
  );
}

export default App;
