import fetch, { Request, Headers, Response } from 'node-fetch';
import fs from './lib/fs';
import Promise from 'bluebird';

export default async function json() {

        const pages = [
            'about',
            'terms-of-use',
            'privacy',
            'learn',
            'support',
            'shipping-returns'
        ];
        let file = '',
            query = '',
            response = '',
            data = '';

        pages.forEach(function(page){
            console.log("Fetching " + page + " page...");
            query = `http://localhost:5000/graphql?query={content(path:"${page}"){path,title,content,component}}`;
            

            (function (p, query, fetch){
                console.log(query);
            fetch(query)
            .then(function(res) {
                return res.text();
            }).then(function(text) {
                console.log(p);
                file = "src/content/json/" + p + '.json';
                console.log(file);
                fs.writeFile(file, text, function(err) {
                        console.log("failed to write " + p);
                });
               
            })})(page, query, fetch);
        })
}
