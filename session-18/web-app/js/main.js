import config from "../../api/config.js";

console.log('frontent web app up and running!');

// no CORS ERROR as it is on the same "domain / app / server" 
// fetch(`resources/exchange-rate.xml`)
//     .then(response => console.log(response))


const requestUrl = `http://127.0.0.1:${config.serverPort}`;

// POST
// fetch(requestUrl, {
//     method: "POST",
//     body: JSON.stringify({
//         title: 'Added using fetch!',
//         description: 'This one was added using FETCH POST!'
//     })
// })

// GET 
fetch(requestUrl)
    .then(response => response.json())
    .then(data => console.log(data))