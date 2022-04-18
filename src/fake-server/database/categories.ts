// application
import { ICategoryDef } from '~/fake-server/interfaces/category-def';
import { makeIdGenerator } from '~/fake-server/utils';
import {
    IBaseCategory,
    IBlogCategory,
    ICategory,
    IShopCategory,
} from '~/interfaces/category';

const getNextId = makeIdGenerator();

function makeShopCategory(def: ICategoryDef, parent: IShopCategory | null): IShopCategory {
    return {
        id: getNextId(),
        type: 'shop',
        name: def.name,
        slug: def.slug,
        image: def.image || null,
        items: def.items,
        parent,
        children: [],
        layout: def.layout ? def.layout : 'products',
        customFields: {},
    };
}

function makeBlogCategory(def: ICategoryDef, parent: IBlogCategory | null): IBlogCategory {
    return {
        id: getNextId(),
        type: 'blog',
        name: def.name,
        slug: def.slug,
        image: def.image || null,
        items: def.items,
        parent,
        children: [],
        customFields: {},
    };
}

function makeCategories<T extends IBaseCategory>(
    makeFn: (def: ICategoryDef, parent: T | null) => T,
    defs: ICategoryDef[],
    parent: T | null = null,
): T[] {
    const categories: T[] = [];

    defs.forEach((def) => {
        const category: T = makeFn(def, parent);

        if (def.children) {
            category.children = makeCategories(makeFn, def.children, category);
        }

        categories.push(category);
    });

    return categories;
}

function flatTree<T extends ICategory>(categories: T[]): T[] {
    let result: T[] = [];

    categories.forEach((category) => {
        result = [...result, category, ...flatTree(category.children as T[])];
    });

    return result;
}

const shopCategoriesDef: ICategoryDef[] = [
    {
        name: 'Helmets',
        slug: 'helmets',
        image: '/images/categories/helmets.png',
        items: 131,
        children: [
            { name: 'Full Face Helmet', slug: 'turn-signals' },
            { name: 'Half Helmet', slug: 'fog-lights' },
            { name: 'Flip-up Helmet', slug: 'headlights' },
            { name: 'Women Helmet', slug: 'switches-relays' },
            { name: 'Junior Helmet', slug: 'tail-lights' },
            { name: 'Helmet Accessories', slug: 'corner-lights' },
            { name: 'Helmet Maintainance', slug: 'off-road-lighting' },
        ],
    },
    {
        name: 'Windshield',
        slug: 'windshield',
        image: '/images/categories/windshield.png',
        items: 356,
        children: [
            { name: 'Windshield Accessories', slug: 'fuel-pumps' },
        ],
    },
    {
        name: 'Tyres',
        slug: 'tyres',
        image: '/images/categories/tyres.jpg',
        items: 54,
        children: [
            { name: 'Wheels', slug: 'bumpers' },
            { name: 'TMPS', slug: 'hoods' },
            { name: 'Valves and Tubes', slug: 'grilles' },
            { name: 'Tyre Inflators', slug: 'fog-lights' },
            { name: 'Tyre Accessories', slug: 'door-handles' },
        ],
    },
    {
        name: 'Batteries',
        slug: 'batteries',
        image: '/images/categories/batteries.png',
        items: 274,
        children: [
            { name: 'Accessories & Parts', slug: 'dashboards' },
            { name: 'Maintainance & Jumpstart', slug: 'seat-covers' },
        ],
    },
];

const blogCategoriesDef: ICategoryDef[] = [
    {
        name: 'Latest News',
        slug: 'latest-news',
    },
    {
        name: 'Special Offers',
        slug: 'special-offers',
        children: [
            {
                name: 'Spring Sales',
                slug: 'spring-sales',
            },
            {
                name: 'Summer Sales',
                slug: 'summer-sales',
            },
            {
                name: 'Autumn Sales',
                slug: 'autumn-sales',
            },
            {
                name: 'Christmas Sales',
                slug: 'christmas-sales',
            },
            {
                name: 'Other Sales',
                slug: 'other-sales',
            },
        ],
    },
    {
        name: 'New Arrivals',
        slug: 'new-arrivals',
    },
    {
        name: 'Reviews',
        slug: 'reviews',
    },
    {
        name: 'Wheels & Tires',
        slug: 'wheels-tires',
    },
    {
        name: 'Engine & Drivetrain',
        slug: 'engine-drivetrain',
    },
    {
        name: 'Transmission',
        slug: 'transmission',
    },
    {
        name: 'Performance',
        slug: 'performance',
    },
];

export const shopCategoriesTree: IShopCategory[] = makeCategories(makeShopCategory, shopCategoriesDef);

export const shopCategoriesList: IShopCategory[] = flatTree(shopCategoriesTree);

export const blogCategoriesTree: IBlogCategory[] = makeCategories(makeBlogCategory, blogCategoriesDef);

export const blogCategoriesList: IBlogCategory[] = flatTree(blogCategoriesTree);
