import { useEffect } from 'react'

const accentKeys = [
  'rose', 'violet', 'indigo', 'cerulean', 'teal', 'sage', 'amber',
  'terracotta', 'plum', 'deep-pink', 'dusty-rose', 'mauve', 'lavender',
  'periwinkle', 'powder-blue', 'sage-mist', 'warm-sand', 'peach', 'blush', 'slate-blue',
]

const randomAccent = () => accentKeys[Math.floor(Math.random() * accentKeys.length)]

export default function ThemeSwitcher() {
  useEffect(() => {
    document.documentElement.setAttribute('data-accent', randomAccent())
  }, [])

  return null
}
