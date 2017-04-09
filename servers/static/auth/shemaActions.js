import service from '../../../src/services/api/index';
import { isEmpty } from 'lodash';

export function getSchemaProfile(profile, domain) {
    return service({
        path: `/accounts/${profile.email}`
    })
        .then(data =>
            !isEmpty(data)
                ? data
                : service({
                    path: '/accounts',
                    method: 'POST',
                    params: {
                        [`${domain}_id`]: profile.id,
                        email: profile.email
                    }
                })
        );
}
