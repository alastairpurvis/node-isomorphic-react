import { includes, forEach } from 'lodash';

const METHODS_WITH_BODY = [
    'POST',
    'PUT',
    'DELETE'
];

export function isMethodWithBody(method) {
    return includes(METHODS_WITH_BODY, method);
}

export function createURLEncodedString(params, method) {
    const
        results = [],
        firstChar = isMethodWithBody(method) ? '' : '?';

    forEach(params, (value, key) => {
        if (typeof value !== 'object') {
            toString(value, key, results);
        }
    });

    forEach(params, (value, key) => {
        if (typeof value === 'object') {
            toString(value, key, results);
        }
    });

    return `${firstChar}${results.join('&')}`;
}

function toString(value, key, results) {
    if (typeof value !== 'object') {
        results.push(`${key}=${encodeURIComponent(value)}`);
    } else {
        for (const subkey in value) {
            toString(value[subkey], `${key}[${subkey}]`, results);
        }
    }
}
