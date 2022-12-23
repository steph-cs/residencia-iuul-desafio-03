import { Pessoa } from "../Abstract/Pessoa";
import { Endereco } from "./Endereco";

export class Cliente extends Pessoa {
  private enderecos: Endereco[] = [];

  constructor(
    private _vip: boolean,
    nome: string,
    cpf: string,
    telefone: string,
    enderecos: Endereco[]
  ) {
    super(nome, cpf, telefone);
    this.enderecos.push(...enderecos);
  }

  /*getter / setter */
  public get vip(): boolean {
    return this._vip;
  }

  public set vip(value: boolean) {
    this._vip = value;
  }

  /*endereco */
  public addEnderecos(enderecos: Endereco[]) {
    this.enderecos.push(...enderecos);
  }

  public removerEnderecos(enderecosRemover: Endereco[]) {
    /*se numero de enderecos cadastrados maior enderecos a remover; remove */
    if (this.enderecos.length > enderecosRemover.length) {
      enderecosRemover.forEach(enderecoRemover => {
        this.enderecos.forEach(endereco => {
          if (endereco == enderecoRemover) {
            let index: number = this.enderecos.indexOf(endereco);
            this.enderecos.splice(index, 1);
            console.log("Endereço removido!");
          }
        });
        console.log(`Cliente não possui o endereco cadastrado: \n ${enderecoRemover.toString()}`);
      });
    } else {
      console.log("Cliente deve possuir pelo menos um endereço cadastrado!");
    }

  }

  public listarEnderecos() {
    return this.enderecos;
  }
}