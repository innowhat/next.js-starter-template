import React from 'react'
import useDarkMode from 'use-dark-mode'
import Switch from '@mui/material/Switch'

const ThemeToggle = () => {
  const darkMode = useDarkMode(false)

  return <Switch checked={darkMode.value} onChange={darkMode.toggle} />
}

export default ThemeToggle
