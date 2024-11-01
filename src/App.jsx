import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './contexts/theme'
import { useEffect, useState } from 'react'

function App () {
  const [themeMode, setThemeMode] = useState('light')
  const darkMode = () => setThemeMode('dark')
  const lightMode = () => setThemeMode('light')

  // Actual change in the theme
  useEffect(() => {
    let defaultTheme = document.querySelector('html')
    defaultTheme.classList.remove('light', 'dark')
    defaultTheme.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <div className='flex flex-wrap min-h-screen items-center'>
        <div className='w-full'>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
            <ThemeBtn />
          </div>

          <div className='w-full max-w-sm mx-auto'>
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
