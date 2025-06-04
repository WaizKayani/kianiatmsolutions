import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme') as Theme
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return savedTheme || (prefersDark ? 'dark' : 'light')
  })

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem('theme', theme)
    // Update document class
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return { theme, toggleTheme }
} 