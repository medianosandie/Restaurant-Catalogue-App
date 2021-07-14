import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createCardGroup2ItemTemplate } from '../templates/template-creator';

const Favourite = {
    async render() {
        return `
            <div class="content">
                <h2>Your Favourite Restaurants</h2>
                <ul id="restaurants" class="card-group-2">
                </ul>
            </div>
        `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
        const restaurantsContainer = document.querySelector('#restaurants');
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createCardGroup2ItemTemplate(restaurant);
        });
    },
};

export default Favourite;
