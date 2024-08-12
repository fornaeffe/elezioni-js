import './App.css'
import { ScegliElezione } from './ScegliElezione'
import { useMotore } from './stato'
import Typography from '@mui/material/Typography';

function App() {
  const motore = useMotore()

  return (
    <>
      <Typography variant="h1">
        Elezioni.ts
      </Typography>
      {motore.elezione ? '' : <ScegliElezione cambiaElezione={motore.cambiaElezione} />}
    </>
  )
}

export default App
