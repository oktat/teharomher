import { calcAreaFromSide } from './utils.js'

const doc = {
  asideInput: document.getElementById('aside'),
  bsideInput: document.getElementById('bside'),
  csideInput: document.getElementById('cside'),
  areaInput: document.getElementById('area'),
  form: document.querySelector('form'),
  aboutButton: document.getElementById('aboutButton')
}

doc.form.addEventListener('submit', (e) => {
  e.preventDefault()
  const aSide = Number(doc.asideInput.value)
  const bSide = Number(doc.bsideInput.value)
  const cSide = Number(doc.csideInput.value)
  const area = calcAreaFromSide(aSide, bSide, cSide)
  doc.areaInput.value = area
})

doc.aboutButton.addEventListener('click', () => {
  window.alert('Sallai András\n2024-12-08')
})
