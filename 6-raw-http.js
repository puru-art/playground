const https = require('https');
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=40&lon=-75&units=metric&appid=996c55d6de21bd8bcbdc443480914631';

const request = https.request(url, (response) => {
    let data = '';
    
    response.on('data', (chuck) => {
        data = data + chuck.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error);
})

request.end()