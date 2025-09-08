import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../tecnicaturas-info.css"

const TecTurDes = () => {
  const navigate = useNavigate();

  const handleIncripcion = () => {
    navigate('/inscripcion');
  };

  return (
    <div className="tec-carreras-info-container">
      <div className="tec-section-carreras-info">
        <div className="tec-overlay-carreras container-fluid">
          <h1 className="tec-title-carreras text-fluid">TECNICATURA UNIVERSITARIA EN TURISMO SOSTENIBLE</h1>
        </div>
      </div>
      <div className='green-bar-car'></div>

      <div className="novedades-separator-custom">
        <div className="container-fluid">
          <h3 className="novedades-title-custom">¿POR QUÉ ESTUDIAR ESTA TECNICATURA?</h3>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="tec-content-section">
        <div className="tec-container">
          <div className="tec-intro-content">
            <div className="tec-icon-container">
              <svg viewBox="0 0 24 24">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
            </div>
            <div className="tec-intro-text">
Formate como profesional para gestionar experiencias turísticas con compromiso ambiental y social. Esta tecnicatura te brindará herramientas prácticas para diseñar, organizar y acompañar actividades turísticas sostenibles, integradas al territorio y con impacto positivo en las comunidades locales.
            </div>
          </div>
        </div>
      </section>

      {/* Objective Section */}
      <div className="novedades-separator-custom">
        <div className="container-fluid">
          <h3 className="novedades-title-custom">OBJETIVO GENERAL</h3>
        </div>
      </div>
      <section className="tec-objective-section">
        <div className="tec-container">
          <p className="tec-objective-text">
Formar técnicos/as capaces de implementar y gestionar proyectos turísticos sostenibles, promoviendo el desarrollo económico, social y ambiental de las comunidades locales con una perspectiva inclusiva y respetuosa del entorno.
          </p>
        </div>
      </section>

      {/* Information Grid */}
      <section className="tec-info-section">
        <div className="tec-container">
          <div className="tec-info-grid">
            <div className="tec-info-card-carrera">
              <div className="tec-info-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <div className="tec-info-title">Título que otorga:</div>
              <div className="tec-info-value">Técnico/a Universitario/a en Turismo Sostenible</div>
            </div>

            <div className="tec-info-card-carrera">
              <div className="tec-info-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="tec-info-title">Duración:</div>
              <div className="tec-info-value">2 años y medio (5 cuatrimestres)</div>
            </div>

            <div className="tec-info-card-carrera">
              <div className="tec-info-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="tec-info-title">Total de horas:</div>
              <div className="tec-info-value">1.344 horas</div>
            </div>

            <div className="tec-info-card-carrera">
              <div className="tec-info-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <div className="tec-info-title">Modalidad:</div>
              <div className="tec-info-value">Presencial</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tec-cta-section">
        <div className="tec-container">
          <div className="tec-cta-buttons">
            <button className="tec-btn tec-btn-primary" onClick={handleIncripcion} style={{cursor: 'pointer'}}>Inscribirse</button>
            <button className="tec-btn tec-btn-secondary">Plan de Estudio</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TecTurDes;