console.log('Fetching conversion rates...');

const url = 'http://127.0.0.1:5500/session-17/exchange-rate.xml';


async function getConversionRate(dayIndex = 0) {
    try {
        const response = await fetch(url);
        const conversionRateText = await response.text();

        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(conversionRateText,"text/xml");        

        // all days
        const cubeTags = xmlDoc.querySelectorAll(`Cube`);

        // the requested day
        const requestedDay = cubeTags[dayIndex];

        // EUR is on index 9
        const euroExchangeNode = requestedDay.querySelectorAll('Rate')[9];

        // promise resolve
        return {
            'date': requestedDay.getAttribute('date'),
            'exchangeRate': Number(euroExchangeNode.textContent)
        };
    
    } catch (error) {
        console.error(error);
    }
}


getConversionRate()
    .then(exchangeRate => console.log(exchangeRate));    

getConversionRate(1)
    .then(exchangeRate => console.log(exchangeRate));    

getConversionRate(2)
    .then(exchangeRate => console.log(exchangeRate));    

getConversionRate(3)
    .then(exchangeRate => console.log(exchangeRate));    