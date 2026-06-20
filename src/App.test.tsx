import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders calculator and switches tabs', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByRole('heading', { name: /Nous Calc/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Unit' }))
    expect(screen.getByText('Result')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Currency' }))
    expect(screen.getByText(/Demo rates/)).toBeInTheDocument()
  })
})