export class Resistration {


    public id?: number;
    public name?: string;
    public email?: string;
    public cpf?: string;
    public cellphone?: string;
    public telephone?: string;
    public address:
        {
            rua: string,
            numero: string,
            bairro: string,
            cidade: string,
            cep: string,
            estado: string,
            pais: string,
        };

    public address2:
        {
            rua: string,
            numero: string,
            bairro: string,
            cidade: string,
            cep: string,
            estado: string,
            pais: string,
        }

    constructor() {
        this.address = {
            rua: "",
            numero: "",
            bairro: "",
            cidade: "",
            cep: "",
            estado: "",
            pais: ""
        }

        this.address2 = {
            rua: "",
            numero: "",
            bairro: "",
            cidade: "",
            cep: "",
            estado: "",
            pais: ""
        }
    }
}

