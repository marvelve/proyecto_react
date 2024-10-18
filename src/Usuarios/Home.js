import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../imagenes/Logo_interivalle.jpg'; 

const Home = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/registro'); 
    };

    const handleLoginClick = () => {
        navigate('/login'); 
    };

    

    return (
        <div className="home-container">
            <h1>Bienvenido</h1>
            <img
                src={logo}
                alt="Logo Interivalle"
                width="250"
                height="100"
                className="imagen-redondeada"
            />

            <div className="button-container">
                <button onClick={handleRegisterClick}>Registrar</button>
                <button onClick={handleLoginClick}>Iniciar Sesión</button>
                
            </div>
        </div>
    );
};

export default Home;
