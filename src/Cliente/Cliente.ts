import { Pessoa } from "../Abstract/Pessoa";
import { Endereco } from "./Endereco";

export class Cliente extends Pessoa {
  private enderecos: Endereco[] = [];

  constructor(
    private _vip: boolean,
    nome: string,
    cpf: string,
    telefone: string,
    endereco: Endereco
  ) {
    super(nome, cpf, telefone);
    this.enderecos.push(endereco);
  }

  /*getter / setter */
  public get vip(): boolean {
    return this._vip;
  }

  public set vip(value: boolean) {
    this._vip = value;
  }

  /*endereco */
  public addEndereco(endereco: Endereco) {
    this.enderecos.push(endereco);
  }

  public removeEndereco(enderecoRemover: Endereco) {
    /*se existe mais de um endereco cadastrado; remove */
    if (this.enderecos.length > 1) {
      this.enderecos.forEach(endereco => {
        if (endereco == enderecoRemover) {
          let index: number = this.enderecos.indexOf(endereco);
          this.enderecos.splice(index, 1);
          console.log("Endereço removido!")
        }
      });
    } else {
      console.log("Cliente deve possuir pelo menos um endereço cadastrado!")
    }

  }

  public listarEnderecos() {
    return this.enderecos;
  }
}