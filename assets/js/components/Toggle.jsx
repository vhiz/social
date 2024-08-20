import { useEffect, useState } from 'react'
import { GoMoon, GoSun } from 'react-icons/go'

export default function Toggle() {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('isDark')
    if (savedTheme) {
      return JSON.parse(savedTheme)
    } else {
      return mediaQuery.matches ? 'dim' : 'wireframe'
    }
  })

  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(isDark))
  }, [isDark])

  return (
    <label className="btn btn-circle btn-ghost swap swap-rotate btn-sm mx-2 text-2xl">
      <input
        type="checkbox"
        className="theme-controller"
        value="dim"
        checked={isDark === 'dim'}
        onChange={() => setIsDark(isDark === 'dim' ? 'wireframe' : 'dim')}
      />

      {/* sun icon */}
      <GoSun className="swap-off fill-current text-sm" />

      {/* moon icon */}
      <GoMoon className="swap-on fill-current text-sm" />
    </label>
  )
}
