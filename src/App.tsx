import { useEffect, useState } from 'react'
import './App.css'
import { CalculatorView } from './components/CalculatorView'
import { CurrencyConverterView } from './components/CurrencyConverterView'
import { TabBar, type TabId } from './components/TabBar'
import { UnitConverterView } from './components/UnitConverterView'
import { applyNousTheme } from './theme/nous'

function App() {
  const [tab, setTab] = useState<TabId>('calc')

  useEffect(() => {
    applyNousTheme()
  }, [])

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <span className="brand-mark" aria-hidden />
          <div>
            <h1>Nous Calc</h1>
            <p>ClevCalc-style · Hermes Nous dark</p>
          </div>
        </div>
      </header>
      <TabBar active={tab} onChange={setTab} />
      <main className="app-main">
        {tab === 'calc' && <CalculatorView />}
        {tab === 'unit' && <UnitConverterView />}
        {tab === 'currency' && <CurrencyConverterView />}
      </main>
    </div>
  )
}

export default App