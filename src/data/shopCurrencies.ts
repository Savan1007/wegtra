// application
import { ICurrency } from '~/interfaces/currency';

const dataShopCurrencies: ICurrency[] = [
    {
        code: 'INR',
        symbol: '₹',
        name: 'Indian Rupee',
        rate: 1,

    },
    {
        code: 'EUR',
        symbol: '€',
        name: 'Euro',
        rate: 0.012,
    },
    {
        code: 'USD',
        symbol: '$',
        name: 'US Dollar',
        rate: 0.013,
    },
];

const dataShopDefaultCurrencyCode = 'INR';

export const dataShopDefaultCurrency: ICurrency = dataShopCurrencies.find((x) => (
    x.code === dataShopDefaultCurrencyCode
))!;

export default dataShopCurrencies;
