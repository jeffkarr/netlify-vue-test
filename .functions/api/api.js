const express = require('express');
const serverless = require('serverless-http');
const http = require('http');

const app = express();

const router = express.Router();

router.get('/getArticles', (req, res) => {
    const url = `http://api.mediastack.com/v1/news?access_key=${process.env.VUE_APP_APIKEY}&countries=us`;
    var getArticles = http.get(url, function (resp) {
        // console.log('STATUS: ' + res.statusCode);
        let output = '';
        resp.on('data', (chunk) => {
            output += chunk;
        })
        resp.on('end', () => {
            let jsonObjArr = JSON.parse(output);

            res.send(jsonObjArr);
        });
        resp.on('error', (e) => {
            console.error(e);
        });
    });
});

router.get('/answer', (req, res) => {
    res.json({
        'answer': 'Im doing fine!'
    });

});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);