import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    restaurant: '',
    contact: '',
    supportType: '',
    issueType: '',
    observations: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.restaurant || !formData.contact || !formData.supportType || !formData.observations) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Todos los campos son obligatorios',
      });
      return;
    }

    // Aquí se realizaría la llamada al backend para enviar el correo y registrar en la base de datos
    console.log('Datos enviados:', formData);

    Swal.fire({
      icon: 'success',
      title: '¡Enviado!',
      text: 'La solicitud se envió correctamente.',
    });

    setFormData({
      name: '',
      restaurant: '',
      contact: '',
      supportType: '',
      issueType: '',
      observations: '',
    });
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px', color: '#036f92' }}>
      <h1 className="text-center mb-4" style={{ color: '#036f92' }}>Soporte Técnico</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Restaurante</label>
          <input
            type="text"
            className="form-control"
            name="restaurant"
            value={formData.restaurant}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Número de contacto</label>
          <input
            type="text"
            className="form-control"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tipo de soporte</label>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="supportType"
                value="technical"
                checked={formData.supportType === 'technical'}
                onChange={handleInputChange}
              />
              <label className="form-check-label">Soporte Técnico</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="supportType"
                value="softRestaurant"
                checked={formData.supportType === 'softRestaurant'}
                onChange={handleInputChange}
              />
              <label className="form-check-label">Soporte Soft Restaurant</label>
            </div>
          </div>
        </div>

        {formData.supportType === 'technical' && (
          <div className="mb-3">
            <label className="form-label">Problema</label>
            <select
              className="form-select"
              name="issueType"
              value={formData.issueType}
              onChange={handleInputChange}
            >
              <option value="">Seleccione un problema</option>
              <option value="printer">Impresora falla</option>
              <option value="noVideo">Computadora no da video</option>
              <option value="noPower">Computadora no enciende</option>
              <option value="noServer">No se encuentra servidor</option>
              <option value="tabletIssue">Tableta falla</option>
              <option value="maintenance">Mantenimiento de equipo</option>
              <option value="noInternet">No hay internet</option>
              <option value="slowComputer">Computadora lenta</option>
              <option value="burnedEquipment">Equipo quemado</option>
            </select>
          </div>
        )}

        {formData.supportType === 'softRestaurant' && (
          <div className="mb-3">
            <label className="form-label">Servicio</label>
            <select
              className="form-select"
              name="issueType"
              value={formData.issueType}
              onChange={handleInputChange}
            >
              <option value="">Seleccione un servicio</option>
              <option value="userPermissions">Permisos de usuario</option>
              <option value="addProducts">Alta de productos</option>
              <option value="license">Licencia de Soft Restaurant</option>
              <option value="staffChanges">Alta y baja de personal</option>
              <option value="catalog">Catálogo de productos por eventos</option>
              <option value="promotions">Promociones</option>
            </select>
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">Observaciones</label>
          <textarea
            className="form-control"
            name="observations"
            value={formData.observations}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn" style={{ backgroundColor: '#036f92', color: 'white' }}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default App;
