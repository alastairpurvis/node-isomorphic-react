import React from 'react';
import Button from '../../Button';
import { deliveryRegions } from '../../../../../config';
import { COLOR_WHITE } from '../../../../../constants/colors';

const
    regions = deliveryRegions.map(item => ({
        name: item,
        selectable: true
    }));

export default (component, s) => {
    const { user, isEditMode } = component.state;

    return [{
        name: 'first_name',
        title: 'Name',
        onClick: component.handleInputClick,
        value: user['first_name']
    }, {
        name: 'phone',
        title: 'Phone',
        onClick: component.handleInputClick,
        value: user['phone']
    }, {
        name: 'email',
        type: 'email',
        title: 'E-mail',
        value: user['email'],
        editable: false
    }, {
        name: 'shipping.address1',
        title: 'Address',
        onClick: component.handleInputClick,
        value: user['shipping']['address1']
    }, {
        name: 'shipping.state',
        type: 'select',
        title: 'Country',
        options: regions,
        defaultValue: 'United States',
        onClick: component.handleInputClick,
        value: user['shipping']['state']
    }, {
        name: 'shipping.city',
        title: 'City',
        onClick: component.handleInputClick,
        value: user['shipping']['city']
    }, {
        name: 'edit',
        type: 'component',
        component: (
            <div className={s.buttons}>
                <Button isSubmit className={s.editButton}>
                    {component.state.isEditMode ? 'Save' : 'Edit'}
                </Button>
                {isEditMode && <Button color={COLOR_WHITE} onClick={component.handleCancelClick}>
                    Cancel
                </Button>}
            </div>
        )
    }];
};
