import { create, all } from 'mathjs'

const math = create(all, {})

/** Normalize display symbols to mathjs (degrees for trig). */
export function normalizeExpression(expr: string): string {
  return expr
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/−/g, '-')
    .replace(/π/g, 'pi')
    .replace(/√\(/g, 'sqrt(')
    .replace(/(\d+)%/g, '($1/100)')
}

export function evaluateExpression(expr: string): { ok: true; value: string } | { ok: false; error: string } {
  const trimmed = expr.trim()
  if (!trimmed) return { ok: false, error: 'Empty expression' }
  try {
    const normalized = normalizeExpression(trimmed)
    const value = math.evaluate(normalized)
    if (typeof value === 'number' && !Number.isFinite(value)) {
      return { ok: false, error: 'Invalid result' }
    }
    if (typeof value === 'number') {
      const formatted = math.format(value, { precision: 14 })
      return { ok: true, value: formatted }
    }
    if (typeof value === 'object' && value !== null && 'toString' in value) {
      return { ok: true, value: String(value) }
    }
    return { ok: true, value: String(value) }
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Evaluation failed' }
  }
}

export function appendToken(current: string, token: string): string {
  if (token === 'AC') return ''
  if (token === '⌫') return current.slice(0, -1)
  if (token === '=') return current
  return current + token
}