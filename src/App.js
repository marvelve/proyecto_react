import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgregarUsuario from './Usuarios/AgregarUsuario';
import Home from './Usuarios/Home'; 
import Login from './Usuarios/Login'; 
import ObraBlanca from './Usuarios/ObraBlanca';
import Madera from './Usuarios/Madera';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<AgregarUsuario />} />
            <Route path="/login" element={<Login />} />
            <Route path="/obrablanca" element={<ObraBlanca />} />
            <Route path="/madera" element={<Madera />} />
        </Routes>
    </Router>
);

export default App;