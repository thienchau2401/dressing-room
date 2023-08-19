// Method 1 
// Use fetch API
// fetch('../data/Data.json')
//    .then(response => response.json())
//    .then(json => {
//     //  console.log(json)
//     data = json;
//    })

//Method 2
//Use import from ES6
// app.js
import * as data from '../data/Data.json' assert { type: 'json' };
export const objectData = data.default;

