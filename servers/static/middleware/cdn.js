import { CDNname } from '../../../src/config';

let CDN = '';

if(process.env.NODE_ENV == 'production'){
    CDN = CDNname;
 }

export default CDN;