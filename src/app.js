/*
* File: app.js
* Author: Sallai Anrás
* Copyright: 2024, Sallai András
* Group: szit.hu
* Date: 2024-12-08
* Github: https://github.com/oktat/
* Licenc: MIT
*/

import {
  calcAreaFromSide, 
  saveTriangleData,
  loadTriangleData
} from './utils.js'

const state = {
  triangleList: []
}

const doc = {
  asideInput: document.getElementById('aside'),
  bsideInput: document.getElementById('bside'),
  csideInput: document.getElementById('cside'),
  areaInput: document.getElementById('area'),
  form: document.querySelector('form'),
  clearButton: document.getElementById('clearButton'),
  triangleList: document.getElementById('triangleList')
}

doc.form.addEventListener('submit', (e) => {
  e.preventDefault()
  const aSide = Number(doc.asideInput.value)
  const bSide = Number(doc.bsideInput.value)
  const cSide = Number(doc.csideInput.value)
  const area = calcAreaFromSide(aSide, bSide, cSide)
  doc.areaInput.value = area
  
  state.triangleList.push({ aSide, bSide, cSide, area })
  saveTriangleData(state.triangleList)
  console.log(state.triangleList)
})

doc.clearButton.addEventListener('click', () => {
  doc.areaInput.value = ''
  doc.asideInput.value = ''
  doc.bsideInput.value = ''
  doc.csideInput.value = ''
})

document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('triangleList') !== null) {
    state.triangleList = loadTriangleData();
    console.log(state.triangleList);
  }
})