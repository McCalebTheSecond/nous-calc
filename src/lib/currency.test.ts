import { describe, expect, it } from 'vitest'
import { convertCurrency } from '../lib/currency'

describe('currency', () => {
  it('converts USD to EUR with static rates', () => {
    const v = convertCurrency(100, 'USD', 'EUR')
    expect(v).toBeCloseTo(92, 5)
  })
})