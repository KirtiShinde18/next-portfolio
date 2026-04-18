"use client"
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // 🚨 Prevent hydration mismatch
  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
        p-2 rounded-lg border 
        border-gray-300 dark:border-gray-600
        bg-gray dark:bg-white/10
        text-black dark:text-white
        hover:bg-gray-100 dark:hover:bg-gray-700
        transition-all duration-300
        flex items-center justify-center
      "
    >
      {
        theme === "dark"
          ? <Moon size={18} />
          : <Sun size={18} />
      }
    </button>
  )
}

export default ThemeToggle