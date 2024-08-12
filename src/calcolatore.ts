import { EMR } from "./EMR";

export type Elezione = null | 'EMR'

export type DatiElezione = {
    nome: string,
    dataDownloadFunction: () => void
}

export const elezioni: Map<Elezione, DatiElezione> = new Map([
    ['EMR', EMR]
])

class Calcolatore {
    constructor() {

    }

    scegliElezione(elezione : Elezione) {
        if (elezione === null) return;

        

    }

}

export const calcolatore = new Calcolatore()




