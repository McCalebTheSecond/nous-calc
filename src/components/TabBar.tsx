export type TabId = 'calc' | 'unit' | 'currency'

const tabs: { id: TabId; label: string }[] = [
  { id: 'calc', label: 'Calculator' },
  { id: 'unit', label: 'Unit' },
  { id: 'currency', label: 'Currency' },
]

export function TabBar({ active, onChange }: { active: TabId; onChange: (t: TabId) => void }) {
  return (
    <nav className="tab-bar" aria-label="Modes">
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          className={active === t.id ? 'active' : ''}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </nav>
  )
}