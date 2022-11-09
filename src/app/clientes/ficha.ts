export class Ficha {
    constructor(id: number) {
        this.rotina = {id: id};
    }

    id: String;
    numTreino: String;
    nome: String;
    observacoes: String;
    rotina: { id: number }
}
