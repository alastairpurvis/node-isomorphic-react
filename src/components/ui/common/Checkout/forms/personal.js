import { isEmpty, map } from 'lodash';

export default component => {
    const { user, orderErrors: errors, isLogged } = component.state;

    return [{
        name: 'error_message',
        type: 'error',
        errors,
        noMargin: isEmpty(errors)
    }, {
        name: 'first_name',
        title: 'First and Last Name',
        validators: {
            required: true
        },
        value: user['first_name']
    }, {
        name: 'email',
        type: 'email',
        title: 'E-mail',
        disabled: isLogged,
        validators: {
            required: true
        },
        value: user['email']
    }, {
        name: 'password',
        type: 'password',
        title: 'Password',
        hidden: isLogged,
        validators: {
            required: true
        }
    },  {
        name: 'phone',
        title: 'Phone',
        value: user['phone']
    }];
};
