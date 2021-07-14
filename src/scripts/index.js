import 'regenerator-runtime'; /* for async await transpile */
import '../styles/general.css';
import '../styles/header.css';
import '../styles/main.css';
import '../styles/footer.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
    hamburgerButton: document.querySelector('.hamburger'),
    closeButton: document.querySelector('.close'),
    menu: document.querySelector('.menu'),
    content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});
