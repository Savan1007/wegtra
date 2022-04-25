// application
import { IMainMenuLink } from '~/interfaces/main-menu-link';

const dataHeaderMainMenu: IMainMenuLink[] = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Services',
        url: '/services',
        submenu: {
            type: 'menu',
            links: [
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
                    url: '/services/2w',
                },
                {
                    title: 'EV store',
                    url: '/services/ev',
                },
                {
                    title: '4W service',
                    url: '/services/4w',
                },
                {
                    title: 'RTO service',
                    url: '/services/rto',
                },
                {
                    title: 'PDI',
                    url: '/services/instructor',
                },
                {
                    title: 'TRAINING',
                    url: '/services/training',
                },
            ],
        },
        customFields: {
            ignoreIn: ['spaceship'],
        },
    },
    {
        title: 'Shop',
        url: '/catalog/products',
        submenu: {
            type: 'megamenu',
            size: 'nl',
            columns: [
                {
                    size: 6,
                    links: [
                        {
                            title: 'Helmets',
                            url: '/catalog/products',
                            links: [
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
                            url: '/catalog/products',
                            links: [
                                { title: 'Windshield Accessories', url: '/catalog/products' },
                            ],
                        },
                    ],
                },
                {
                    size: 6,
                    links: [
                        {
                            title: 'Tyres',
                            url: '/catalog/products',
                            links: [
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
                            url: '/catalog/products',
                            links: [
                                { title: 'Accessories & Parts', url: '/catalog/products' },
                                { title: 'Maintainance & Jump Start', url: '/catalog/products' }
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        title: 'About Us',
        url: '/about-us',
        submenu: {
            type: 'menu',
            links: [
                {
                    title: 'About Team',
                    url: '/about-us',
                },
                {
                    title: 'Career',
                    url: '/',
                },
            ],
        },
    },
    {
        title: 'Blogs',
        url: '/blogs',
    },
    {
        title: 'Contact Us',
        url: '/contact-us',
    },
];

export default dataHeaderMainMenu;
