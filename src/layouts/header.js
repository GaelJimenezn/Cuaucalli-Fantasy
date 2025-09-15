// Una función helper para crear elementos de forma más sencilla
const createElement = (tag, { className = '', href = '#', text = '', children = [] }) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (href !== '#') el.href = href;
    if (text) el.textContent = text;
    if (children.length) {
        children.forEach(child => el.appendChild(child));
    }
    return el;
};

// El componente que construye el Header
const HeaderComponent = () => {
    const navLinksData = [
        { href: '#/', text: 'Inicio' },
        { href: '#/concursos', text: 'Concursos' },
        { href: '#/galeria', text: 'Galería' },
    ];

    const logo = createElement('a', { className: 'logo', href: '#/', text: 'Cuauhcalli Fantasy' });

    const navLinks = createElement('ul', {
        className: 'nav-links',
        children: navLinksData.map(item =>
            createElement('li', {
                children: [createElement('a', { href: item.href, text: item.text })]
            })
        )
    });

    return createElement('nav', { className: 'container', children: [logo, navLinks] });
};

// Exportamos la función para poder importarla desde main.js
export default HeaderComponent;