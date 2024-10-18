import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Madera = () => {
    const [maderaData, setMaderaData] = useState({
        anchoMuebleAlto: '',
        anchoMuebleBajo: '',
        anchoMuebleBano: '',
        anchoCloset: '',
        anchoVestier: '',
        cantidadCloset: '',
        cantidadPuertas: '',
        medidaPuertas: '',
    });
    const navigate = useNavigate();
    const [errores, setErrores] = useState({});

    // Manejar los cambios de los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setMaderaData({
            ...maderaData,
            [name]: value,
        });
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/api/madera', maderaData);   
        if (response.status === 200) {
            alert('se envio cotizacion al correo registrado'); // Muestra el mensaje de éxito
            navigate('/');
            setErrores({});
        }
    } catch (error) {
            console.error('Error al guardar las medidas de la madera:', error);
            setErrores('Hubo un error al guardar medidas.');
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
            <h2>Ingrese medidas en cm</h2>
            <div className="form-group">
                <label htmlFor="anchoMuebleAlto">Ancho Mueble Alto Cocina: *</label>
                <input
                    type="text"
                    id="anchoMuebleAlto"
                    name="anchoMuebleAlto"
                    value={maderaData.anchoMuebleAlto}
                    onChange={handleChange}
                    required
                /><br /><br />
            </div>
            <div className="form-group">
                <label htmlFor="anchoMuebleBajo">Ancho Mueble Bajo Cocina: *</label>
                <input
                    type="text"
                    id="anchoMuebleBajo"
                    name="anchoMuebleBajo"
                    value={maderaData.anchoMuebleBajo}
                    onChange={handleChange}
                    required
                /><br /><br />
            </div>
            <div className="form-group">
                <label htmlFor="anchoMuebleBano">Ancho Mueble Baño: *</label>
                <input
                    type="text"
                    id="anchoMuebleBano"
                    name="anchoMuebleBano"
                    value={maderaData.anchoMuebleBano}
                    onChange={handleChange}
                    required
                /><br /><br />
            </div>
            <div className="form-group">
                <label htmlFor="anchoCloset">Ancho Closet:</label>
                <input
                    type="text"
                    id="anchoCloset"
                    name="anchoCloset"
                    value={maderaData.anchoCloset}
                    onChange={handleChange}
                /><br /><br />
            </div>
            <div className="form-group">
                <label htmlFor="anchoVestier">Ancho Vestier:</label>
                <input
                    type="text"
                    id="anchoVestier"
                    name="anchoVestier"
                    value={maderaData.anchoVestier}
                    onChange={handleChange}
                /><br /><br />
            </div>
            <div className="form-group">
                <label htmlFor="cantidadCloset">Cantidad Closet:</label>
                <input
                    type="number"
                    id="cantidadCloset"
                    name="cantidadCloset"
                    value={maderaData.cantidadCloset}
                    onChange={handleChange}
                /><br /><br />
            </div>
            <div className="form-group">
                <label htmlFor="cantidadPuertas">Cantidad de Puertas:</label>
                <input
                    type="number"
                    id="cantidadPuertas"
                    name="cantidadPuertas"
                    value={maderaData.cantidadPuertas}
                    onChange={handleChange}
                /><br /><br />
            </div>
            <div className="form-group">
                <label htmlFor="medidaPuertas">Medida Puerta:</label>
                <input
                    type="text"
                    id="medidaPuertas"
                    name="medidaPuertas"
                    value={maderaData.medidaPuertas}
                    onChange={handleChange}
                /><br /><br />
            </div>
                <button type="submit">Cotizar</button>
            </form>
            {errores.mensaje && <p>{errores.mensaje}</p>}
        </div>
    );
};

export default Madera;
