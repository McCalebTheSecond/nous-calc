export type UnitCategory = 'length' | 'weight' | 'temperature'

const lengthToMeter: Record<string, number> = {
  m: 1,
  km: 1000,
  cm: 0.01,
  mm: 0.001,
  mi: 1609.344,
  ft: 0.3048,
  in: 0.0254,
}

const weightToKg: Record<string, number> = {
  kg: 1,
  g: 0.001,
  lb: 0.45359237,
  oz: 0.028349523125,
}

export function convertUnit(
  category: UnitCategory,
  value: number,
  from: string,
  to: string,
): number | null {
  if (!Number.isFinite(value)) return null
  if (category === 'temperature') {
    return convertTemperature(value, from, to)
  }
  if (category === 'length') {
    const fromM = lengthToMeter[from]
    const toM = lengthToMeter[to]
    if (fromM == null || toM == null) return null
    return (value * fromM) / toM
  }
  const fromKg = weightToKg[from]
  const toKg = weightToKg[to]
  if (fromKg == null || toKg == null) return null
  return (value * fromKg) / toKg
}

function convertTemperature(value: number, from: string, to: string): number | null {
  let c: number
  if (from === 'C') c = value
  else if (from === 'F') c = ((value - 32) * 5) / 9
  else if (from === 'K') c = value - 273.15
  else return null
  if (to === 'C') return c
  if (to === 'F') return (c * 9) / 5 + 32
  if (to === 'K') return c + 273.15
  return null
}

export const unitOptions: Record<UnitCategory, string[]> = {
  length: Object.keys(lengthToMeter),
  weight: Object.keys(weightToKg),
  temperature: ['C', 'F', 'K'],
}