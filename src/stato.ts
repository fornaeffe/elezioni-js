import { useState } from "react";
import { Elezione, elezioni, calcolatore } from "./calcolatore";

type Stato = {
    elezione: Elezione
}

const statoIniziale : Stato = {
    elezione: null
}

export type Motore = Stato & {
    nome: string | undefined,
    cambiaElezione: (elezione : Elezione) => void
}

export function useMotore() : Motore {
    const [stato, setStato] = useState(statoIniziale)

    return {
        ...stato,
        nome: elezioni.get(stato.elezione)?.nome,
        cambiaElezione: (elezione : Elezione) => {

            if (elezione) calcolatore.scegliElezione(elezione)

            setStato({
                ...stato,
                elezione: elezione
            })
        }
    }
}