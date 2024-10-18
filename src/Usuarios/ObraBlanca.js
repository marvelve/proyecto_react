import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ObraBlanca = () => {
    // Estado para cada campo del formulario
    const [formData, setFormData] = useState({
        medidaAreaPrivada: '',
        medidaCocina: '',
        medidaBano: '',
        medidaZonaOficios: '',
        medidaSalpicaderoCocina: '',
        cantidadBanos: '',
        cantidadPoyos: '',
        cantidadPanel: '',
        cantidadMuros: '',
        cantidadPuntosElectricos: ''
    });
    const navigate = useNavigate();
    // Estado para manejar posibles mensajes de error
    const [errores, setErrores] = useState({});

    // Maneja el cambio de los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/api/obrablanca', formData);
            if (response.status === 200) {
                alert('Medidas registradas correctamente');
                setFormData({
                    medidaAreaPrivada: '',
                    medidaCocina: '',
                    medidaBano: '',
                    medidaZonaOficios: '',
                    medidaSalpicaderoCocina: '',
                    cantidadBanos: '',
                    cantidadPoyos: '',
                    cantidadPanel: '',
                    cantidadMuros: '',
                    cantidadPuntosElectricos: ''
                });
                setErrores({});
            }
        } catch (error) {
            console.error('Error al registrar la cotización:', error);
            setErrores({ mensaje: 'Hubo un error al registrar la cotización' });
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
            <h2>Ingrese las medidas en cm</h2>
                <div className="form-group">
                    <label htmlFor="medidaAreaPrivada">Medida Área Privada: *</label>
                    <input
                        type="text"
                        id="medidaAreaPrivada"
                        name="medidaAreaPrivada"
                        value={formData.medidaAreaPrivada}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="medidaCocina">Medida Cocina: *</label>
                    <input
                        type="text"
                        id="medidaCocina"
                        name="medidaCocina"
                        value={formData.medidaCocina}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="medidaBano">Medida Baño: *</label>
                    <input
                        type="text"
                        id="medidaBano"
                        name="medidaBano"
                        value={formData.medidaBano}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="medidaZonaOficios">Medida Zona de Oficios:</label>
                    <input
                        type="text"
                        id="medidaZonaOficios"
                        name="medidaZonaOficios"
                        value={formData.medidaZonaOficios}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="medidaSalpicaderoCocina">Medida Salpicadero Cocina:</label>
                    <input
                        type="text"
                        id="medidaSalpicaderoCocina"
                        name="medidaSalpicaderoCocina"
                        value={formData.medidaSalpicaderoCocina}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cantidadBanos">Cantidad de Baños: *</label>
                    <input
                        type="number"
                        id="cantidadBanos"
                        name="cantidadBanos"
                        value={formData.cantidadBanos}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cantidadPoyos">Cantidad de Poyos:</label>
                    <input
                        type="number"
                        id="cantidadPoyos"
                        name="cantidadPoyos"
                        value={formData.cantidadPoyos}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cantidadPanel">Cantidad de Paneles:</label>
                    <input
                        type="number"
                        id="cantidadPanel"
                        name="cantidadPanel"
                        value={formData.cantidadPanel}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cantidadMuros">Cantidad de Muros:</label>
                    <input
                        type="number"
                        id="cantidadMuros"
                        name="cantidadMuros"
                        value={formData.cantidadMuros}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cantidadPuntosElectricos">Cantidad de Puntos Eléctricos:</label>
                    <input
                        type="number"
                        id="cantidadPuntosElectricos"
                        name="cantidadPuntosElectricos"
                        value={formData.cantidadPuntosElectricos}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Guardar Medidas</button>

                <button type="button" onClick={() => navigate('/madera')}>Medidas Madera</button>
            </form>
            {errores.mensaje && <p>{errores.mensaje}</p>}
        </div>
    );
};

export default ObraBlanca;
