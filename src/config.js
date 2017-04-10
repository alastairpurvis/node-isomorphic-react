import { canUseDOM } from './utils/env';

export const
    HOST = process.env.HOST || process.env.BASE_URI || (canUseDOM && window.env && window.env.HOST) || 'https://skinmoderne-client.appspot.com',
    PORT = process.env.PORT || 8080,
    baseUrl = HOST,
    siteName = 'Skin Moderne',
    facebook = {
        APP_ID: '<your_facebook_app_id>'
    },
    api = {
        URL: 'https://skinmoderne-api.appspot.com',
        VERSION: '/api'
    },
    pagination = {
        PAGE_SIZE: 16
    },
    mail = 'info@skinmoderne.com',
    routes = {
        HOME: '/',
        ABOUT: '/about',
        PRODUCTS: '/products',
        PRODUCT: '/product',
        CATEGORY: '/category',
        CATALOG: '/catalog',
        CART: '/cart',
        CHECKOUT: '/checkout',
        SUPPORT: '/support',
        LOGIN: '/login',
        REGISTER: '/register',
        NEWSLETTER: '/newsletter',
        FORGOTTEN_PASSWORD: '/forgotten-password',
        PROFILE: '/profile',
        SEARCH: '/search',
        RESET_PASSWORD: '/reset',
        CART: '/cart',
        CHECKOUT_SUCCESS: '/checkout/success',
        FACEBOOK_AUTH: '/auth/facebook',
        FACEBOOK_SHARE: 'http://www.facebook.com/sharer.php?u=',
        VK_SHARE: 'http://vk.com/share.php?url=',
        GOOGLE_PLUS_SHARE: 'https://plus.google.com/share?url=',
        PINTEREST_SHARE: 'http://www.pinterest.com/pin/create/button/?media=',
        TWITTER_SHARE: 'https://twitter.com/intent/tweet?text='
    },
    emptyLayoutPages = [
        'error',
        'notFound',
        'checkout'
    ],
    mobilePagesWithFooter = [
        'home',
        'category',
        'product'
    ],
    mobilePagesWithBackIcon = [
        'product',
        'newsletter',
        'login',
        'register',
        'forgottenPassword',
        'cart',
        'checkout'
    ],
    deliveryRegions = [
        'United States',
        'Canada'
    ];
