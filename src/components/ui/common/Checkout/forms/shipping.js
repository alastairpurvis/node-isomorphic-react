import { deliveryRegions } from '../../../../../config';
import { isEmpty, map } from 'lodash';

const
    regions = map(deliveryRegions, item => ({
        name: item,
        key: item,
        selectable: true
    }));

export default component => {
    const { user, orderErrors: errors, isLogged } = component.state;

    return [{
        name: 'shipping.address1',
        title: 'Street Address',
        validators: {
            required: true
        },
        value: user['shipping']['address1']
    }, {
        name: 'shipping.country',
        type: 'select',
        title: 'Country',
        options: regions,
        validators: {
            required: true
        },
        defaultValue: 'USA',
        value: user['shipping']['country']
    }, {
        name: 'shipping.state',
        title: 'State',
        validators: {
            required: true
        },
        value: user['shipping']['state']
    }, {
        name: 'shipping.city',
        title: 'City',
        validators: {
            required: true
        },
        value: user['shipping']['city']
    }];
};
