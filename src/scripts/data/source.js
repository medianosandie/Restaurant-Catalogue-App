import API_ENDPOINT from '../globals/api-endpoint';

class Source {
    static async homeContents() {
        const response = await fetch(API_ENDPOINT.HOME);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async restaurantPicture(pictureId) {
        return API_ENDPOINT.BASE_IMAGE_URL_SMALL + pictureId;
    }

    static async restaurantDetail(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }

    static async postUserReview({ id, name, review }) {
        const response = await fetch(API_ENDPOINT.POST_REVIEW,
            {
                method: 'POST',
                body: JSON.stringify({
                    id,
                    name,
                    review,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'X-Auth-Token': 12345,
                },
            },
        // eslint-disable-next-line function-paren-newline
        );
        return response.json();
    }
}

export default Source;
