/*
* File: list.js
* Author: Sallai Anrás
* Copyright: 2024, Sallai András
* Group: szit.hu
* Date: 2024-12-08
* Github: https://github.com/oktat/
* Licenc: MIT
*/

import { loadTriangleData } from './utils.js';

const doc = {
  tbody: document.getElementById('tbody')
}

const state = {
  triangleList: loadTriangleData()
}

doc.tbody.innerHTML = state.triangleList.map((triangle) => {
  return `
    <tr>
      <td>${triangle.aSide}</td>
      <td>${triangle.bSide}</td>
      <td>${triangle.cSide}</td>
      <td>${triangle.area}</td>
    </tr>
  `
}).join('')

console.log(state.triangleList);
