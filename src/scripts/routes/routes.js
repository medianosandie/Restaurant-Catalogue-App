import Home from '../views/pages/home';
import Favourite from '../views/pages/favourite';
import AboutUs from '../views/pages/about-us';
import Detail from '../views/pages/detail';

const routes = {
    '/': Home, // default page
    '/favourite': Favourite,
    '/about-us': AboutUs,
    '/detail/:id': Detail,
};

export default routes;
