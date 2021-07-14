import Source from '../../data/source';
import UrlParser from '../../routes/url-parser';
import {
    createRestaunrantDetailTemplate,
    createCommentBoxTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import EventHandler from '../../utils/event-handler';

const Detail = {
    async render() {
        return `
            <div id="restaurant" class="restaurant">
                <img src="../../../public/images/icons/loading.gif" alt="loading gif" id="loading-gif">
            </div>
            <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await Source.restaurantDetail(url.id);
        const restaurantContainer = document.querySelector('#restaurant');
        restaurantContainer.innerHTML = createRestaunrantDetailTemplate(restaurant)
        + createCommentBoxTemplate();

        const addReviewButton = document.querySelector('#add-review-btn');
        addReviewButton.addEventListener('click', () => EventHandler.addReviewButtonClicked());
        const postCommentButton = document.querySelector('#post-comment-btn');
        postCommentButton.addEventListener('click', () => EventHandler.postReviewButtonClicked());
        const cancelButton = document.querySelector('#cancel-btn');
        cancelButton.addEventListener('click', () => EventHandler.cancelButtonClicked());

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: restaurant.restaurant,
        });
    },
};

export default Detail;
