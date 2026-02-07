// server.js
import { createServer } from 'node:http';
import config from './config.js';

const posts = [
    {
        id: 11,
        title: 'Webdev is awesome',
        description: 'Learnig webdev is empowering!!!'
    },
    {
        id: 225,
        title: 'Scoala Informală de IT',
        description: 'Learnig webdev online!'
    }
]

const server = createServer((req, res) => {
    const response = {};

    let requestBody = '';

    switch (req.method) {
        case 'GET':
            console.log('GET request was received!');
            response.code = 200;
            break;

        case 'POST':
            console.log('POST request was received!');
            response.code = 201;

            req.on('data', (chunk) => {
                console.log(`Data chunk available: ${chunk}`)
                requestBody += chunk;
            })

            req.on('end', () => {
                console.log(`Request ended!`)
                console.log(`Request body: ${requestBody}`)
                const receivedData = JSON.parse(requestBody)
                receivedData.id = 2001
                
                posts.push(receivedData);
            })

            break;

        default:
            break;
    }


    res.writeHead(response.code,
        {
            'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': `OPTIONS, POST, GET, PUT, DELETE`,
            'Content-Type': 'application/json'
        });

    res.end(JSON.stringify(posts));
});


// starts a simple http server locally on port 3000
server.listen(config.serverPort, '127.0.0.1', () => {
    console.log(`Listening on 127.0.0.1:${config.serverPort}`);
});


// run with `node server.js`