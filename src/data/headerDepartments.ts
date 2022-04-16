// application
import { IDepartmentsLink } from '~/interfaces/departments-link';

const dataHeaderDepartments: IDepartmentsLink[] = [
    
    {
        title: 'Helmets',
        url: '/catalog/products',
        submenu: {
            type: 'megamenu',
            size: 'sm',
            columns: [
                {
                    size: 12,
                    links: [
                        {
                            title: 'Helmets',
                            url: '/catalog/products',
                            links: [
                                { title: 'Full Face Helmet', url: '/catalog/products' },
                                { title: 'Half Helmet', url: '/catalog/products' },
                                { title: 'Flip-up Helmets', url: '/catalog/products' },
                                { title: 'Women Helmet', url: '/catalog/products' },
                                { title: 'Junior Helmet', url: '/catalog/products' },
                                { title: 'Helmet Accessories', url: '/catalog/products' },
                                { title: 'Helmet Maintainance', url: '/catalog/products' },
                            ],
                        }
                        
                    ],
                },
            ],
        },
    },
    {
        title: 'Tyres',
        url: '/catalog/products',
        submenu: {
            type: 'megamenu',
            size: 'sm',
            columns: [
                {
                    size: 12,
                    links: [
                        {
                            title: 'Tyres',
                            url: '/catalog/products',
                            links: [
                                { title: 'Wheels', url: '/catalog/products' },
                                { title: 'TPMS', url: '/catalog/products' },
                                { title: 'Valves & Tubes', url: '/catalog/products' },
                                { title: 'Tyre Inflators', url: '/catalog/products' },
                                { title: 'Accessories', url: '/catalog/products' },
                                { title: 'Flat Tyre / Puncture Services', url: '/catalog/products' },
                            ],
                        }
                        
                    ],
                },
            ],
        },
    },
    {
        title: 'Batteries',
        url: '/catalog/products',
        submenu: {
            type: 'megamenu',
            size: 'sm',
            columns: [
                {
                    size: 12,
                    links: [
                        {
                            title: 'Batteries',
                            url: '/catalog/products',
                            links: [
                                { title: 'Accessories & Parts', url: '/catalog/products' },
                                { title: 'Maintainance & Jump Start', url: '/catalog/products' },
                            ],
                        }
                        
                    ],
                },
            ],
        },
    },
    {
        title: 'Windshields',
        url: '/catalog/products',
        submenu: {
            type: 'megamenu',
            size: 'sm',
            columns: [
                {
                    size: 12,
                    links: [
                        {
                            title: 'Windshields',
                            url: '/catalog/products',
                            links: [
                                { title: 'Accessories', url: '/catalog/products' }
                            ],
                        }
                        
                    ],
                },
            ],
        },
    },

];

export default dataHeaderDepartments;
