import { describe, expect, it } from 'vitest'
import { convertUnit } from '../lib/unitConverter'

describe('unitConverter', () => {
  it('converts length', () => {
    expect(convertUnit('length', 1, 'km', 'm')).toBe(1000)
  })

  it('converts weight', () => {
    expect(convertUnit('weight', 1, 'kg', 'g')).toBe(1000)
  })

  it('converts temperature', () => {
    expect(convertUnit('temperature', 32, 'F', 'C')).toBeCloseTo(0, 5)
  })
})