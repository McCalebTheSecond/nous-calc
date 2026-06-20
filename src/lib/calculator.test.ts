import { describe, expect, it } from 'vitest'
import { appendToken, evaluateExpression, normalizeExpression } from '../lib/calculator'

describe('calculator', () => {
  it('normalizes symbols', () => {
    expect(normalizeExpression('2×3÷2')).toBe('2*3/2')
  })

  it('evaluates arithmetic', () => {
    expect(evaluateExpression('2+3*4')).toEqual({ ok: true, value: '14' })
  })

  it('evaluates trig in radians', () => {
    const r = evaluateExpression('sin(0)')
    expect(r.ok).toBe(true)
    if (r.ok) expect(Number(r.value)).toBeCloseTo(0, 5)
  })

  it('handles append and backspace', () => {
    expect(appendToken('12', '3')).toBe('123')
    expect(appendToken('123', '⌫')).toBe('12')
    expect(appendToken('x', 'AC')).toBe('')
  })
})