

function calcAreaFromSide(aSide, bSide, cSide) {
  const s = (aSide + bSide + cSide) / 2
  return Math.sqrt(s * (s - aSide) * (s - bSide) * (s - cSide))
}

export { calcAreaFromSide }
