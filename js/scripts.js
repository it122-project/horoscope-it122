/*!
* Start Bootstrap - Heroic Features v5.0.5 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// the following is an example of how to use our horoscope-api module
import { getHoroscope } from './horoscope-api.js';

// the api responds with json that has the following structure
/*  response json:
    {
        date_range: <date-range>,
        current_date: <current-date>,
        description: <description>,
        compatibility: <compatibility>,
        mood: <mood>,
        color: <color>,
        lucky_number: <lucky_number>,
        lucky_time: <lucky_time>,
    }
*/

// example output console
console.log(await getHoroscope('aries', 'today')); // see the console

// example pasting into an element
await getHoroscope('aries', 'today').then(response => {
    document.getElementById('main').innerHTML = response.current_date;
});

// another way to get the data and paste it into an elment
const data = await getHoroscope('aries', 'today');
document.getElementById('main').innerHTML = JSON.stringify(data);

// if any incorrect data is passed to 'getHoroscope' then the default options will be used (pisces, today)
const badRequest = await getHoroscope(new Object(), 1);
console.log('from the bad request: ', badRequest); // see the console