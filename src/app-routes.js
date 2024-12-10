// import { HomePage, ShopPage, FAQsPage } from './pages/shop/shop';
import ShopPage from './pages/shop/shop';
import { withNavigationWatcher } from './context/navigation';

const routes = [
    // {
    //     path: '/home',
    //     element: HomePage
    // },
    {
        path: '/shop',
        element: ShopPage
    },
    // {
    //     path: '/faqs',
    //     element: FAQsPage
    // },
    // {
    //     path: '/home',
    //     element: HomePage
    // },
    // {
    //     path: '/home',
    //     element: HomePage
    // },
    // {
    //     path: '/home',
    //     element: HomePage
    // },
    // {
    //     path: '/home',
    //     element: HomePage
    // },
    // {
    //     path: '/home',
    //     element: HomePage
    // },
    // {
    //     path: '/home',
    //     element: HomePage
    // },
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
