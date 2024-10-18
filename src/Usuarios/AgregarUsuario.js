import React, { useState } from 'react';
import axios from 'axios';
import logo from '../imagenes/Logo_interivalle.jpg';
import { useNavigate } from 'react-router-dom';


const AgregarUsuario = () => {
    // Estado para los campos del formulario
    const [nombre_completo, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [nombre_proyecto, setProyecto] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [errores, setErrores] = useState({});

    const navigate = useNavigate();

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Crear objeto con los datos del usuario
        const usuario = {
            nombre_completo,
            email: correo,
            ciudad,
            nombre_proyecto,
            contrasena
        };

        try {
            const response = await axios.post('http://localhost:8081/api/usuarios', usuario, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (response.status === 200 || response.status === 201) {
                // Si la respuesta es exitosa, limpia los campos y muestra un mensaje
                setNombre('');
                setCorreo('');
                setCiudad('');
                setProyecto('');
                setContrasena('');
                setErrores({});
                alert('Usuario registrado correctamente');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                // Si hay errores de validación, los obtiene y los muestra
                setErrores(error.response.data);
            } else {
                console.error('Error al registrar el usuario:', error);
            }
        }
    };

    // Validación del campo nombre_completo para permitir solo letras
    const handleNombreChange = (e) => {
        const { value } = e.target;
        const soloLetras = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]*$/;

        // Verificar si el valor contiene solo letras y espacios
        if (soloLetras.test(value)) {
            setNombre(value);
            setErrores((prevErrores) => ({
                ...prevErrores,
                nombre_completo: '',
            }));
        } else {
            setErrores((prevErrores) => ({
                ...prevErrores,
                nombre_completo: 'Solo debe contener letras y espacios',
            }));
        }
    };
    const handleCerrar = () => {
        navigate('/');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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

                <h1>Registro de usuarios</h1>

                <div className="form-group">
                    <label htmlFor="nombre">Nombre Completo *</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre_completo}
                       // onChange={(e) => setNombre(e.target.value)}
                        onChange={handleNombreChange}
                        required
                    />
                   {errores.nombre_completo && (
                    <p style={{ color: 'red', fontSize: '0.9em' }}>
                        {errores.nombre_completo}
                    </p>
                )}
                </div>

                <div className="form-group">
                    <label htmlFor="correo">Correo *</label>
                    <input
                        type="email"
                        id="correo"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />
                    {errores.email && <p>{errores.email}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="ciudad">Ciudad del Proyecto</label>
                    <input
                        type="text"
                        id="ciudad"
                        value={ciudad}
                        onChange={(e) => setCiudad(e.target.value)}
                    />
                    {errores.ciudad && <p>{errores.ciudad}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="proyecto">Nombre Proyecto *</label>
                    <input
                        type="text"
                        id="nombre_proyecto"
                        value={nombre_proyecto}
                        onChange={(e) => setProyecto(e.target.value)}
                        required
                    />
                    {errores.nombre_proyecto && <p>{errores.nombre_proyecto}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="contrasena">Contraseña *</label>
                    <input
                        type="password"
                        id="contrasena"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        required
                    />
                    {errores.contrasena && <p>{errores.contrasena}</p>}
                </div>

                <button type="submit">Registrar</button>
            
                
                <button type="button" onClick={() => navigate('/login')}>Login</button>

            </form>
            <footer>
                2024 Interivalle. Todos los derechos reservados.
            </footer>
        </div>
    );
};

export default AgregarUsuario;
