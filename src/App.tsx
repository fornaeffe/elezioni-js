import { useState } from 'react'
import './App.css'
import { Start } from './Start'
import { EMR } from './EMR'

export type StatoApp = 'start' | 'EMR'

function App() {
  const [stato, setStato] = useState('start' as StatoApp)
  
  const simulatori : Map<StatoApp, JSX.Element> = new Map([
    ['start', <Start setStato={setStato} />],
    ['EMR', <EMR setStato={setStato} />]
  ])

  return (
    <>
      <h1>Simulatore elettorale</h1>
      {simulatori.get(stato)}
    </>
  )
}

export default App
