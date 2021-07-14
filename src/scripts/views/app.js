import MenuInitiator from '../utils/menu-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor(
        {
            hamburgerButton,
            closeButton,
            menu,
            content,
        },
    ) {
        this._hamburgerButton = hamburgerButton;
        this._closeButton = closeButton;
        this._menu = menu;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        MenuInitiator.init({
            hamburgerButton: this._hamburgerButton,
            closeButton: this._closeButton,
            menu: this._menu,
        });
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App;
