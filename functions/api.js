
// async function hello() {
//     return Promise.resolve("Hello to my World");
// }

// exports.handler = async (event, context) => {
//     const body = await hello();
//     return { statusCode: 200, body: JSON.stringify(body)};
// }

const express = require('express');
const serverless = require('serverless-http');

const app = express();

const router = express.Router();

router.get('/question', (req, res) => {
    res.json({
        'question': 'How are you?'
    });
});

router.get('/answer', (req, res) => {
    res.json({
        'answer': 'Im doing fine!'
    });

});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);