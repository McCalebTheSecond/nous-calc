/** Hermes Android built-in Nous theme — dark tokens (HermesTokens.kt) */
export const nousDark = {
  background: '#0D2F86',
  foreground: '#FFE6CB',
  mutedForeground: '#B5C7F3',
  primary: '#FFE6CB',
  onPrimary: '#0D2F86',
  sidebarBackground: '#09286F',
  sidebarBorder: '#234A9C',
  elevated: '#12378F',
  userBubble: '#143B91',
  userBubbleBorder: '#3A63BD',
  assistantBubble: '#12378F',
  strokeTertiary: 'rgba(255, 230, 203, 0.2)',
  strokeNous: 'rgba(255, 230, 203, 0.08)',
  chromeActionHover: 'rgba(255, 230, 203, 0.1)',
  destructive: '#C0473A',
  statusConnected: '#7DD3A8',
  composerBackground: '#0B2566',
  composerRing: '#FFE6CB',
  accentBlue: '#0053FD',
} as const

export function applyNousTheme(root: HTMLElement = document.documentElement) {
  const t = nousDark
  root.style.setProperty('--bg', t.background)
  root.style.setProperty('--fg', t.foreground)
  root.style.setProperty('--muted', t.mutedForeground)
  root.style.setProperty('--primary', t.primary)
  root.style.setProperty('--on-primary', t.onPrimary)
  root.style.setProperty('--elevated', t.elevated)
  root.style.setProperty('--sidebar', t.sidebarBackground)
  root.style.setProperty('--border', t.sidebarBorder)
  root.style.setProperty('--composer', t.composerBackground)
  root.style.setProperty('--destructive', t.destructive)
  root.style.setProperty('--accent-blue', t.accentBlue)
  root.style.setProperty('--hover', t.chromeActionHover)
}