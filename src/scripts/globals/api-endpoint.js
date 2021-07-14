import CONFIG from './config';

const API_ENDPOINT = {
    HOME: `${CONFIG.BASE_URL}/list`,
    BASE_IMAGE_URL_SMALL: `${CONFIG.BASE_IMAGE_URL}small/`,
    DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
    POST_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
