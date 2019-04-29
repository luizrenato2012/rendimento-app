export class Beneficiario {
    cpf: string;
    matricula:string;
    comprovante: number;

    constructor(cpf?: string , matricula? :string){
        this.matricula = matricula;
        this.cpf = cpf;
    }

}