import { Conta } from "../Abstract/Conta";
import { Pessoa } from "../Abstract/Pessoa";
import { IUsuario } from "../Interface/IUsuario";
import { Endereco } from "./Endereco";

export class Cliente extends Pessoa implements IUsuario {
  private enderecos: Endereco[] = [];
  private contas: Conta[] = [];

  constructor(
    private _vip: boolean,
    nome: string,
    cpf: string,
    telefone: string,
    enderecos: Endereco[],
    contas: Conta[]
  ) {
    super(nome, cpf, telefone);
    this.enderecos.push(...enderecos);
    this.contas.push(...contas);
  }

  /*IUsuario */
  public autenticar(): boolean {
    return true;
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
          }
        });
      });
    }

  }

  public listarEnderecos() {
    return this.enderecos;
  }

  /*conta */
  public addContas(contas: Conta[]) {
    this.contas.push(...contas);
  }

  public removercontas(contasRemover: Conta[]) {
    /*se numero de contas cadastrados maior contas a remover; remove */
    if (this.contas.length > contasRemover.length) {
      contasRemover.forEach(contaRemover => {
        this.contas.forEach(conta => {
          if (conta == contaRemover) {
            let index: number = this.contas.indexOf(conta);
            this.contas.splice(index, 1);
          }
        });
      });
    }
  }

  public listarContas() {
    return this.contas;
  }
}