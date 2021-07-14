import Source from '../../data/source';
import { createCardGroup1ItemTemplate, createCardGroup2ItemTemplate, createSectionsTemplate }
from '../templates/template-creator';

const Home = {
    async render() {
        return createSectionsTemplate();
    },

    async afterRender() {
        const restaurants = await Source.homeContents();

        const cardGroup1 = restaurants.map(
            (restaurant, index) => createCardGroup1ItemTemplate(restaurant, index),
        );
        cardGroup1.forEach((card, index) => {
            if (index < 4) {
                document.querySelector('.card-group-1').innerHTML += card;
            }
        });

        const cardGroup2 = restaurants.map(
            (restaurant) => createCardGroup2ItemTemplate(restaurant),
        );
        cardGroup2.forEach((card) => {
            document.querySelector('.card-group-2').innerHTML += card;
        });
    },
};

export default Home;
