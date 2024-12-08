/*
* File: utils.js
* Author: Sallai Anrás
* Copyright: 2024, Sallai András
* Group: szit.hu
* Date: 2024-12-08
* Github: https://github.com/oktat/
* Licenc: MIT
*/

function calcAreaFromSide(aSide, bSide, cSide) {
  const s = (aSide + bSide + cSide) / 2
  return Math.sqrt(s * (s - aSide) * (s - bSide) * (s - cSide))
}

function saveTriangleData(triangle) {
  localStorage.setItem('triangleList', JSON.stringify(triangle))
}

function loadTriangleData() {
  return JSON.parse(localStorage.getItem('triangleList'))
}

export { 
  calcAreaFromSide, 
  saveTriangleData, 
  loadTriangleData 
}
