import { useMemo, useState } from 'react'
import { appendToken, evaluateExpression } from '../lib/calculator'

const SCI_ROWS: string[][] = [
  ['AC', '⌫', '(', ')'],
  ['sin', 'cos', 'tan', 'π'],
  ['√', 'x²', 'log', 'ln'],
  ['7', '8', '9', '÷'],
  ['4', '5', '6', '×'],
  ['1', '2', '3', '−'],
  ['0', '.', '%', '+'],
]

function mapKey(key: string): string {
  if (key === 'x²') return '^2'
  if (key === '√') return '√('
  if (key === 'sin') return 'sin('
  if (key === 'cos') return 'cos('
  if (key === 'tan') return 'tan('
  if (key === 'log') return 'log10('
  if (key === 'ln') return 'log('
  return key
}

export function CalculatorView() {
  const [expression, setExpression] = useState('')
  const [history, setHistory] = useState<string[]>([])

  const preview = useMemo(() => evaluateExpression(expression), [expression])

  const onKey = (key: string) => {
    if (key === '=') {
      const result = evaluateExpression(expression)
      if (result.ok) {
        setHistory((h) => [`${expression} = ${result.value}`, ...h].slice(0, 8))
        setExpression(result.value)
      }
      return
    }
    setExpression((e) => appendToken(e, mapKey(key)))
  }

  return (
    <div className="panel calculator-panel">
      <div className="display" aria-live="polite">
        <div className="display-expression">{expression || '0'}</div>
        <div className="display-result">
          {preview.ok ? preview.value : preview.ok === false && expression ? '…' : ''}
        </div>
      </div>
      <div className="keypad">
        {SCI_ROWS.flat().map((key) => (
          <button
            key={key}
            type="button"
            className={`key ${['÷', '×', '−', '+', '='].includes(key) ? 'key-op' : ''} ${key === 'AC' ? 'key-clear' : ''}`}
            onClick={() => onKey(key)}
          >
            {key}
          </button>
        ))}
        <button type="button" className="key key-equals" onClick={() => onKey('=')}>
          =
        </button>
      </div>
      {history.length > 0 && (
        <section className="history" aria-label="History">
          <h3>History</h3>
          <ul>
            {history.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}