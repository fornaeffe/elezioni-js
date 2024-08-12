import './App.css'
import { elezioni } from './globals';
import { BottoneCambiaElezione, ScegliElezione } from './ScegliElezione'
import { useMotore } from './stato'

function App() {
  const motore = useMotore()

  const contenutoPrincipale = motore.elezione ?
    <> 
      <div className='barra-superiore'>
        <div className='titolo-superiore'>
          Elezioni.ts
        </div>
        <div className='nome-elezione'>
          {elezioni.get(motore.elezione)}
        </div>
        <BottoneCambiaElezione cambiaElezione={motore.cambiaElezione} />
      </div>
    </> :
    <div className='contenitore-iniziale'> 
      <div className='titolo-iniziale'>Elezioni.ts</div> 
      <ScegliElezione cambiaElezione={motore.cambiaElezione} />
    </div>

  return (
    <>
      {contenutoPrincipale}
    </>
  )
}

export default App
