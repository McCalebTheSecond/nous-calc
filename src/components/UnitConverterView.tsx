import { useMemo, useState } from 'react'
import { convertUnit, unitOptions, type UnitCategory } from '../lib/unitConverter'

export function UnitConverterView() {
  const [category, setCategory] = useState<UnitCategory>('length')
  const units = unitOptions[category]
  const [from, setFrom] = useState(units[0])
  const [to, setTo] = useState(units[1] ?? units[0])
  const [amount, setAmount] = useState('1')

  const result = useMemo(() => {
    const n = Number(amount)
    const v = convertUnit(category, n, from, to)
    return v == null ? '—' : String(Math.round(v * 1e8) / 1e8)
  }, [amount, category, from, to])

  const onCategory = (c: UnitCategory) => {
    setCategory(c)
    const opts = unitOptions[c]
    setFrom(opts[0])
    setTo(opts[1] ?? opts[0])
  }

  return (
    <div className="panel">
      <div className="segmented">
        {(['length', 'weight', 'temperature'] as UnitCategory[]).map((c) => (
          <button
            key={c}
            type="button"
            className={category === c ? 'active' : ''}
            onClick={() => onCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <label className="field">
        Amount
        <input value={amount} onChange={(e) => setAmount(e.target.value)} inputMode="decimal" />
      </label>
      <div className="row-2">
        <label className="field">
          From
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {units.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          To
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {units.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="result-card">
        <span className="muted">Result</span>
        <strong>
          {result} {to}
        </strong>
      </div>
    </div>
  )
}