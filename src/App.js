import { useEffect } from 'react'
import './App.css'
import { useTg } from './components/hooks/useTg'

function App() {
  const { onToggleButton, tg } = useTg()
  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <button onClick={onToggleButton}>toogle</button>
    </div>
  )
}

export default App
