/** Static demo rates vs USD (ClevCalc-style; replace with live API in production). */
export const currencyRatesUsd: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 157.2,
  CNY: 7.24,
  CAD: 1.36,
  AUD: 1.52,
  CHF: 0.88,
  INR: 83.1,
  MXN: 17.05,
}

export function convertCurrency(amount: number, from: string, to: string): number | null {
  if (!Number.isFinite(amount)) return null
  const fromRate = currencyRatesUsd[from]
  const toRate = currencyRatesUsd[to]
  if (fromRate == null || toRate == null) return null
  const usd = amount / fromRate
  return usd * toRate
}

export const currencyCodes = Object.keys(currencyRatesUsd).sort()