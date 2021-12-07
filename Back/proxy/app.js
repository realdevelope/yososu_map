/*
    Ryu Seung Wan
*/

const request = require('request');
const express = require('express');
const cors = require('cors');
const app = express();

const client_id = 'ayB_b2TmQFkzpz0XuIwN';
const client_secret = 'TGRTTBx7BW';
const searchParamOptions = {
    query: '요소수',
    display: 5
};

// node.js 내의 cors 미들웨어 호출
app.use(cors());
app.set('port', process.env.PORT || '3001');

app.get('/', (req, res) => {
    request.get({
        uri: 'https://openapi.naver.com/v1/search/news.json',
        qs: searchParamOptions,
        headers: {
            'X-Naver-Client-Id': client_id,
            'X-Naver-Client-Secret': client_secret
        }
    }, function(err, apiResponse, body) {
            let json = JSON.parse(body);
            res.json(json);
    })
})

app.listen(3001);