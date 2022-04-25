// application
import { IMobileMenuLink } from '~/interfaces/mobile-menu-link';

const dataMobileMenuLinks: IMobileMenuLink[] = [
    {
        title: 'Home',
        url: '/',
        
    },
    {
        title: 'Shop',
        url: '/catalog/products',
        submenu: [
            {
                title: 'Helmets',
                url: '/demo/shop/category-columns-4-sidebar',
                submenu: [
                    { title: 'Full Face Helmet', url: '/catalog/products' },
                    { title: 'Half Helmet', url: '/catalog/products' },
                    { title: 'Flip-up Helmet', url: '/catalog/products' },
                    { title: 'Women Helmet', url: '/catalog/products' },
                    { title: 'Junior Helmet', url: '/catalog/products' },
                    { title: 'Helmet Accessories', url: '/catalog/products' },
                    { title: 'Helmet Maintainance', url: '/catalog/products' }
                ],
            },
            {
                title: 'Windshield',
                url: '/demo/shop/shop-grid-4-sidebar',
                submenu: [
                    { title: 'Windshield Accessories', url: '/catalog/products' },
                ],
            },
            {
                title: 'Tyres',
                url: '/demo/shop/shop-cursor-navigation',
                submenu: [
                    { title: 'Wheels', url: '/catalog/products' },
                    { title: 'TPMS', url: '/catalog/products' },
                    { title: 'Valves & Tubes', url: '/catalog/products' },
                    { title: 'Tyre Inflators', url: '/catalog/products' },
                    { title: 'Tyre Accessories', url: '/catalog/products' },
                    { title: 'Flat Tyre / Puncture Service', url: '/catalog/products' },
                ],
            },
            {
                title: 'Batteries',
                url: '/demo/shop/product-full',
                submenu: [
                    { title: 'Accessories & Parts', url: '/catalog/products' },
                    { title: 'Maintainance & Jump Start', url: '/catalog/products' }
                ],
            },
        ],
    },
    {
        title: 'Services',
        url: '/services',
        submenu: [
            {
                title: 'Tyers',
                url: '/services/tyers',
            },
            {
                title: 'Battery',
                url: '/services/battery',
            },
            {
                title: 'Windshield',
                url: '/services/windshield',
            },
            {
                title: 'Helmets',
                url: '/services/helmet',
            },
            {
                title: '2W service',
                url: '/servises/2w',
            },
            {
                title: 'EV store',
                url: '/service/ev',
            },
            {
                title: '4W service',
                url: '/service/4w',
            },
            {
                title: 'RTO service',
                url: '/service/rto',
            },
            {
                title: 'PDI',
                url: '/service/instructor',
            },
            {
                title: 'TRAINING',
                url: '/service/training',
            },
        ],
    },
    {
        title: 'Blog',
        url: '/demo/blog/classic-right-sidebar',
        submenu: [
            {
                title: 'Blog Classic',
                url: '/demo/blog/classic-right-sidebar',
                submenu: [
                    { title: 'Left Sidebar', url: '/demo/blog/classic-left-sidebar' },
                    { title: 'Right Sidebar', url: '/demo/blog/classic-right-sidebar' },
                ],
            },
            {
                title: 'Blog List',
                url: '/demo/blog/list-right-sidebar',
                submenu: [
                    { title: 'Left Sidebar', url: '/demo/blog/list-left-sidebar' },
                    { title: 'Right Sidebar', url: '/demo/blog/list-right-sidebar' },
                ],
            },
            {
                title: 'Blog Grid',
                url: '/demo/blog/grid-right-sidebar',
                submenu: [
                    { title: 'Left Sidebar', url: '/demo/blog/grid-left-sidebar' },
                    { title: 'Right Sidebar', url: '/demo/blog/grid-right-sidebar' },
                ],
            },
            {
                title: 'Post Page',
                url: '/demo/blog/post-full-width',
                submenu: [
                    { title: 'Full Width', url: '/demo/blog/post-full-width' },
                    { title: 'Left Sidebar', url: '/demo/blog/post-left-sidebar' },
                    { title: 'Right Sidebar', url: '/demo/blog/post-right-sidebar' },
                ],
            },
            { title: 'Post Without Image', url: '/demo/blog/post-without-image' },
        ],
    },
    {
        title: 'Account',
        url: '/account/dashboard',
        submenu: [
            { title: 'Login & Register', url: '/account/login' },
            { title: 'Dashboard', url: '/account/dashboard' },
            { title: 'Garage', url: '/account/garage' },
            { title: 'Edit Profile', url: '/account/profile' },
            { title: 'Order History', url: '/account/orders' },
            {
                title: 'Order Details',
                url: {
                    href: '/account/orders/[id]?id=1',
                    as: '/account/orders/1',
                },
            },
            { title: 'Address Book', url: '/account/addresses' },
            {
                title: 'Edit Address',
                url: {
                    href: '/account/addresses/[id]?id=new',
                    as: '/account/addresses/new',
                },
            },
            { title: 'Change Password', url: '/account/password' },
        ],
    },
    // {
    //     title: 'Select City',
    //     url: '/terms',
    //     submenu: [
    //         { title: 'Banglore', url: '/about-us' },
    //         { title: 'Hydrabad', url: '/demo/site/contact-us-v1' },
    //     ],
    // },
    
    
];

export default dataMobileMenuLinks;
