import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../imagenes/Logo_interivalle.jpg';

const Login = () => {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8081/api/login', {
                email: correo,
                contrasena
            });

            if (response.status === 200) {
                // Login exitoso, redirige a la página de Datos Obra Blanca
                navigate('/obrablanca'); 
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError('Email o contraseña incorrectos');
            } else {
                console.error('Error de autenticación:', error);
                setError('Ocurrió un error. Intenta nuevamente.');
            }
        }
    };

    const handleCerrar = () => {
        navigate('/');
    };
    return (
        <div>
            <form onSubmit={handleLogin}>
            <button onClick={handleCerrar} 
                style={{
                        float: 'left',
                        backgroundColor: '#CAD8CA',
                        color: '#009E0F',
                        border: '3px solid',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '16px',
                    }}>
                X
            </button>
            <h1><img
                src={logo}
                alt="Logo"
                width="250"
                height="100"
                className="imagen-redondeada"
            /></h1>
                <h1>Login</h1>

                <div className="form-group">
                    <label htmlFor="email">Correo</label>
                    <input
                        type="email"
                        id="correo"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="contrasena">Contraseña</label>
                    <input
                        type="password"
                        id="contrasena"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        required
                    />
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
