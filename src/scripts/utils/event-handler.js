import Source from '../data/source';
import UrlParser from '../routes/url-parser';
import { createCustomerReviewsTemplate } from '../views/templates/template-creator';

class EventHandler {
    static addReviewButtonClicked() {
        document.querySelector('#comment-box').classList.toggle('hide');
        document.querySelector('#add-review-btn').classList.toggle('hide');
    }

    static async postReviewButtonClicked() {
        document.querySelector('#comment-box').classList.toggle('hide');

        // retrieve user inputs
        let name = document.querySelector('#username').value;
        let userReview = document.querySelector('#user-review').value;

        // post user review
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const response = await Source.postUserReview({
            id: url.id,
            name,
            review: userReview,
        });
        const customerReviewsContainer = document.querySelector('#customer-reviews');

        // assign successfull response into dom
        const customerReviews = createCustomerReviewsTemplate(response.customerReviews);
        customerReviewsContainer.innerHTML = customerReviews;

        name = '';
        userReview = '';
        document.querySelector('#add-review-btn').classList.toggle('hide');
    }

    static cancelButtonClicked() {
        document.querySelector('#comment-box').classList.toggle('hide');
        document.querySelector('#add-review-btn').classList.toggle('hide');
    }
}

export default EventHandler;
