// --- IMPORTAMOS LOS COMPONENTES SEPARADOS ---
import HeaderComponent from '../layouts/header.js';
import FooterComponent from '../layouts/footer.js';

document.addEventListener('DOMContentLoaded', () => {
  const headerRoot = document.getElementById('header-root');
  const appRoot = document.getElementById('app-root');
  const footerRoot = document.getElementById('footer-root');

  // --- PÁGINAS COMO COMPONENTES (Estas se quedan aquí) ---
  const HomePage = () => {
    const container = document.createElement('div');
    container.innerHTML = `
            <section class="hero" style="background-image: url('assets/image_hero.jpg');">
                <div class="hero-content"><h1>Cuauhcalli Fantasy</h1><p>Donde la creatividad y el talento se encuentran.</p></div>
            </section>
            <div class="page-container container">
                <div class="section-title"><h2>Sobre el Evento</h2></div>
            </div>`;
    return container;
  };

  const ConcursosPage = () => {
    const container = document.createElement('div');
    container.innerHTML = `<div class="page-container container"><h2>Página de Concursos</h2></div>`;
    return container;
  };

  // --- ROUTER Y LÓGICA DE RENDERIZADO ---
  const routes = {
    '/': HomePage,
    '/concursos': ConcursosPage,
  };

  const render = () => {
    appRoot.innerHTML = '';
    const path = window.location.hash.slice(1) || '/';
    const pageBuilder = routes[path] || HomePage;
    appRoot.appendChild(pageBuilder());
    updateActiveNavLink(path);
  };

  const updateActiveNavLink = (path) => {
    headerRoot.querySelectorAll('.nav-links a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${path}`) {
        link.classList.add('active');
      }
    });
  };

  // --- INICIALIZACIÓN ---
  headerRoot.appendChild(HeaderComponent());
  footerRoot.appendChild(FooterComponent());

  window.addEventListener('hashchange', render);
  render();
});