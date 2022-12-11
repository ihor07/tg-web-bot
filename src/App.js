import './App.css'
import { useEffect } from 'react'
import { useTelegram } from './components/hooks/useTg'
import Header from './components/Header/header'

function App() {
  const { onToggleButton, tg } = useTelegram()
  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toogle</button>
    </div>
  )
}

export default App
