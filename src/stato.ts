import { useState } from "react";
import { Elezione } from "./globals";

type Stato = {
    elezione: Elezione
}

const statoIniziale : Stato = {
    elezione: null
}

export type Motore = Stato & {
    cambiaElezione: (elezione : Elezione) => void
}

export function useMotore() : Motore {
    const [stato, setStato] = useState(statoIniziale)

    return {
        ...stato,
        cambiaElezione: (elezione : Elezione) => {
            setStato({
                ...stato,
                elezione: elezione
            })
        }
    }
}