// fetch('../data/Data.json')
//    .then(response => response.json())
//    .then(json => {
//     let {tabPanes,navPills} = json;
//     console.log(tabPanes);
//     for (tab of tabPanes) {
//         for (pill of navPills ) {
//             if (tab.type == pill.type) {
//                 let card = document.createElement('div');
//                 card.classList.add('card');
//                 card.classList.add('col-3');
//                 card.innerHTML = `
//                 <img src="${tab.imgSrc_jpg}" class="card-img-top" alt="...">
//                 <div class="card-body text-center">
//                   <h4 class="card-title">${tab.name}</h4>
//                   <a href="#" class="btn btn-primary">Thử đồ</a>
//                 </div>
//                 `;
//                 console.log(card);
//                 let linkQuery = `#${pill.type} > .row`;
//                 console.log(linkQuery);
//                 document.querySelector(linkQuery).append(card);
//             }
//         }
        
//     }
//    })

import {objectData} from '../utils/callData.js';
let {tabPanes,navPills} = objectData;
console.log(tabPanes);
for (let tab of tabPanes) {
  for (let pill of navPills) {
    if (tab.type == pill.type) {
      let card = document.createElement("div");
      card.classList.add("card");
      card.classList.add("col-3");
      card.innerHTML = `
                    <img src="${tab.imgSrc_jpg}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                      <h4 class="card-title">${tab.name}</h4>
                      <a class="btn btn-primary" onclick = tryItem('${tab.imgSrc_png}','${tab.type}') style='cursor:pointer;'>Thử đồ</a>
                    </div>
                    `;
      let linkQuery = `#${pill.type} > .row`;
      document.querySelector(linkQuery).append(card);
    }
  }
}