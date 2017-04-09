export function userErrorsParser(error) {
    switch (error.code) {
    case 'UNIQUE':
        return 'This e-mail address is already used';
    default:
        return error.message;
    }
}
