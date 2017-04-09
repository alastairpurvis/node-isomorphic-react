import ReactDOM from 'react-dom/server';
import Router from '../../../src/routes';
import ServerContext from '../ServerContext';
import { analytics } from '../config.js';

let indexTemplate = require('../views/index.jade');

async function render(req, res, next) {
    try {
        const
            context = new ServerContext({ req, res }),
            data = context.getData(),
            css = context.getCss(),

            // deploy environment for client side
            env = {
                HOST: process.env.HOST,
                PORT: process.env.PORT,
                API_URL: process.env.API_URL
            };

        if (process.env.NODE_ENV === 'production') {
            data.trackingId = analytics.google.trackingId;
        }

        await Router.dispatch({ path: req.path, query: req.query, context, isServer: true }, (state, component) => {
            data.body = ReactDOM.renderToString(component);
            data.css = css.map(style => style.element).join('');
            data.script = `window.CONTEXT=${JSON.stringify(context.dehydrate())}; window.env=${JSON.stringify(env)}`;
        });

        res.status(context.getStatus());
        res.send(indexTemplate(data));
    } catch (err) {
        next(err);
    }
}

export default render;
