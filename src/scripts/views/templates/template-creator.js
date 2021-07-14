import CONFIG from '../../globals/config';

const createSectionsTemplate = () => `
    <section class="section-1">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque delectus praesentium laboriosam perferendis hic in soluta officiis fuga corporis.</p>
        <img src="../public/images/heros/hero-image_1.jpg" alt="">
    </section>
    <section class="section-2">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque delectus praesentium laboriosam perferendis hic in soluta officiis fuga corporis.</p>
        <img src="../public/images/heros/hero-image_2.jpg" alt="">
    </section>
    <section class="section-3">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque delectus praesentium laboriosam perferendis hic in soluta officiis fuga corporis.</p>
        <img src="../public/images/heros/hero-image_3.jpg" alt="">
    </section>
    <section class="section-4">
        <h3>Top Rated Restaurants</h3>
        <ul class="card-group-1">
        </ul>
    </section>
    <section class="section-5">
        <h3>Near You</h3>
        <ul class="card-group-2">
        </ul>
    </section>
`;

const createCardGroup1ItemTemplate = (restaurant, index) => `
    <li>
        <span>${index + 1}</span>
        <h4 class="name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h4>
        <div class="rating">
            <h5>${restaurant.rating}</h5>
        </div>
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    </li>
`;

const createCardGroup2ItemTemplate = (restaurant) => `
    <li>
        <h4 class="name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h4>
        <h5 class="city">${restaurant.city}</h5>
        <div class="rating">
            <h5>${restaurant.rating}</h5>
            <img src="../../../public/images/icons/favourite.png" alt="favourite icon">
        </div>
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        <p>${restaurant.description}</p>
    </li>
`;

const createCustomerReviewsTemplate = (customerReviews) => customerReviews.map((review) => `
    <li>
        <h5>${review.name} | ${review.date}</h5>
        <p>${review.review}</p>
    </li>
`).join('\n');

const mapAndJoin = (array) => array.map((item) => item.name).join(', ');

const createRestaunrantDetailTemplate = ({ restaurant }) => {
    let {
        // eslint-disable-next-line prefer-const
        name, pictureId, city, address, description, categories, menus, rating, customerReviews,
    } = restaurant;

    categories = mapAndJoin(categories);
    const foods = mapAndJoin(menus.foods);
    const drinks = mapAndJoin(menus.drinks);

    customerReviews = createCustomerReviewsTemplate(customerReviews);

    return `
        <img class="restaurant-image" src="${CONFIG.BASE_IMAGE_URL + pictureId}" alt="${name}" />
        <h2 class="restaurant-name">${name}</h2>
        <div class="restaurant-info">
            <h4 class="rating">Rating : ${rating}</h4>
            <h4 class="city">City : ${city}</h4>
            <h4 class="address">Address : ${address}</h4>
            <div class="description">
                <h4>Description :</h4>
                <p>${description}</p>
            </div>
            <h4 class="category">Category : ${categories}</h4>
            <div class="menus">
                <h4>Menus</h4>
                <h5>Foods</h5>
                <span>${foods}<span>
                <h5>Drinks</h5>
                <span>${drinks}<span>
            </div>
            <div class="customer-reviews">
                <h4>Customer Reviews</h4>
                <ul class='customer-reviews' id='customer-reviews'>
                    ${customerReviews}
                </ul>
            </div>   
        </div>
        <button id="add-review-btn">Add Review</button>
    `;
};

const createCommentBoxTemplate = () => `
    <div class="comment-box hide" id="comment-box">
        <label for="username" id="username-label">Name</label>
        <input type="text" name="username" id="username">
        <label for="user-review" id="review-label">Review</label>
        <textarea id="user-review" name="user-review" rows="4"></textarea>
        <div id="button-group">
            <button id="post-comment-btn">Post Comment</button>
            <button id="cancel-btn">Cancel</button>
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createRestaunrantDetailTemplate,
    createCardGroup1ItemTemplate,
    createCardGroup2ItemTemplate,
    createSectionsTemplate,
    createCustomerReviewsTemplate,
    createCommentBoxTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};
