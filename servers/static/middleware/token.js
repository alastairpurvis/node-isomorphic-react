import { getSchemaProfile } from '../auth/shemaActions';
import strategies from '../auth/strategies';
import { last } from 'lodash';

function token(req, res) {
    const
        domain = last(req.path.split('/')),
        { getToken, getProfile } = strategies[domain];

    getToken(req, res)
        .then(token => getProfile(token))
        .then(profile => {
            if (!profile.email) {
                throw new Error();
            }

            return getSchemaProfile(profile, domain);
        })
        .then(schemaProfile => res.cookie('account_id', schemaProfile.id).redirect('/'))
        .catch(error => res.redirect('/'));
}

export default token;
