import statusCodes from '../../src/constants/statusCodes';

const SEC_DELIMITER = 1000;

class Logger {
    add({ req, params, time, statusCode }) {
        const statusText = statusCode === statusCodes.OK ? 'SUCCESS' : 'FAIL';

        console.log(`[${statusText}] [${new Date()}]
            method: ${req.method.toUpperCase()},
            path: ${req.baseUrl + req.path},
            params: ${JSON.stringify(params)},
            time: ${time / SEC_DELIMITER} ms`);
    }
}

export default Logger;
