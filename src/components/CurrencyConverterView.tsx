import { useMemo, useState } from 'react'
import { convertCurrency, currencyCodes } from '../lib/currency'

export function CurrencyConverterView() {
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('EUR')
  const [amount, setAmount] = useState('100')

  const result = useMemo(() => {
    const n = Number(amount)
    const v = convertCurrency(n, from, to)
    return v == null ? '—' : v.toFixed(2)
  }, [amount, from, to])

  return (
    <div className="panel">
      <p className="hint">Demo rates (static). Hook a live FX API for production.</p>
      <label className="field">
        Amount
        <input value={amount} onChange={(e) => setAmount(e.target.value)} inputMode="decimal" />
      </label>
      <div className="row-2">
        <label className="field">
          From
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {currencyCodes.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          To
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {currencyCodes.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="result-card">
        <span className="muted">Converted</span>
        <strong>
          {result} {to}
        </strong>
      </div>
    </div>
  )
}