/* eslint-disable no-param-reassign */
const MenuInitiator = {
    init({ hamburgerButton, closeButton, menu }) {
        hamburgerButton.addEventListener('click', (event) => {
            this._openMenu({ event, menu, hamburgerButton });
        });

        closeButton.addEventListener('click', (event) => {
            this._closeMenu({ event, menu, hamburgerButton });
        });
    },

    _openMenu({ event, menu, hamburgerButton }) {
        event.stopPropagation();
        menu.style.transform = 'translateX(0)';
        hamburgerButton.classList.add('remove-hamburger-button');
    },

    _closeMenu({ event, menu, hamburgerButton }) {
        event.stopPropagation();
        hamburgerButton.classList.remove('show-hamburger-button');
        hamburgerButton.classList.remove('remove-hamburger-button');
        menu.style.transform = 'translateX(100%)';
    },
};

export default MenuInitiator;
