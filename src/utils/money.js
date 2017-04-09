import { CURRENCY_SIGN } from '../constants/currencies';
import { formatAmount } from './amount';

export function formatPrice(price, currency) {
    const
        formattedPrice = price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        //currencySymbol = getCurrencySymbol(currency);

    return `${formattedPrice}`;
}

export function getCurrencySymbol(abbreviation) {
    return CURRENCY_SIGN[abbreviation];
}

export function calculatePrice(initialPrice, discount) {
    return initialPrice * (1 - discount);
}
