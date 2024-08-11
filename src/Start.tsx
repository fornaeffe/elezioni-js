import { StatoApp } from "./App";

export function Start(props: { setStato : (s: StatoApp) => void}) {
  
    return (
      <>
        Scegli il simulatore:
        <a onClick={() => props.setStato('EMR')}>Elezioni regionali Emilia-Romagna 2024</a>        
      </>
    )
  }
  