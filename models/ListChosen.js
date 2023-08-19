//Method 1

// fetch('../data/Data.json')
//    .then(response => response.json())
//    .then(json => {
//     let {navPills} = json;
//     //console.log(navPills);
//     let content_pill = '';
//     let content_tab = '';
//     let i = 0;
//     for (pill of navPills) {
//         content_pill += `
//         <li class="nav-item">
//             <a class="nav-link ${(i == 0) ? 'active' :''}" id="${pill.tabName}" data-toggle="pill" href="#${pill.type}" role="tab" aria-controls="pills-home" aria-selected="${i == 0}">${pill.showName}</a>
//         </li>
//         `;
//         content_tab += `
//         <div class="tab-pane fade ${(i++ == 0) ? 'active show' :''}" id="${pill.type}" role="tabpanel" aria-labelledby="pills-${pill.type}-tab">
//             <div class = "row">
//             </div>
//         </div>
//     `;
//     }
//     document.querySelector('.nav-pills').innerHTML= content_pill;
//     document.querySelector('.tab-content').innerHTML= content_tab;
//    })

//Method 2

import {objectData} from '../utils/callData.js';
let {navPills} = objectData;
    let content_pill = '';
    let content_tab = '';
    let i = 0;
    for (let pill of navPills) {
        content_pill += `
        <li class="nav-item">
            <a class="nav-link ${(i == 0) ? 'active' :''}" id="${pill.tabName}" data-toggle="pill" href="#${pill.type}" role="tab" aria-controls="pills-home" aria-selected="${i == 0}">${pill.showName}</a>
        </li>
        `;
        content_tab += `
        <div class="tab-pane fade ${(i++ == 0) ? 'active show' :''}" id="${pill.type}" role="tabpanel" aria-labelledby="pills-${pill.type}-tab">
            <div class = "row w-100">
            </div>
        </div>
    `;
    }
    document.querySelector('.nav-pills').innerHTML= content_pill;
    document.querySelector('.tab-content').innerHTML= content_tab;