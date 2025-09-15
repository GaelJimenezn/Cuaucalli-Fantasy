const FooterComponent = () => {
    const footerContainer = document.createElement('div');
    // Usamos innerHTML para construir esta estructura compleja de forma clara
    footerContainer.innerHTML = `
        <div class="container footer-grid">
            <div class="footer-col">
                <div class="footer-logo">
                    <h3>Cuauhcalli Fantasy</h3>
                </div>
                <p>Donde florece el arte universitario. Un evento que celebra la creatividad y el talento estudiantil.</p>
                <div class="footer-info">
                    <p><span>🗓️</span> Primera semana del cuatrimestre</p>
                    <p><span>📍</span> Universidad Cuauhtémoc</p>
                </div>
            </div>
            <div class="footer-col">
                <h4>Enlaces Rápidos</h4>
                <ul>
                    <li><a href="#/">Inicio</a></li>
                    <li><a href="#/concursos">Concursos</a></li>
                    <li><a href="#/cronograma">Actividades</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Más Información</h4>
                 <ul>
                    <li><a href="#/galeria">Galería</a></li>
                    <li><a href="#/patrocinadores">Patrocinadores</a></li>
                    <li><a href="#/contacto">Contacto</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Detalles del Evento</h4>
                <p><strong class="footer-highlight">Horario</strong><br>10:00 AM - 5:00 PM</p>
                <p><strong class="footer-highlight">Organizadoras</strong><br>Paula Samantha Tapia Vega<br>Elida Sarahi González Monárrez</p>
                <p><strong class="footer-highlight">Contacto</strong><br>cuauhcalli.fantasy@ucuauhtemoc.edu.mx</p>
            </div>
        </div>
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2025 Cuauhcalli Fantasy. Todos los derechos reservados.<br>Universidad Cuauhtémoc - Sede Constituyentes</p>
                <p>Hecho con <span class="footer-highlight">❤️</span> para la comunidad estudiantil</p>
            </div>
        </div>
    `;
    return footerContainer;
};

// Exportamos la función para poder importarla
export default FooterComponent;