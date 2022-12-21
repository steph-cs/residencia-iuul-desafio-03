import { Conta } from "../Abstract/Conta";

class ContaPoupanca {

  constructor(
    private _rentabilidadeMensal: number
  ) { }

  public get rentabilidadeMensal(): number {
    return this._rentabilidadeMensal;
  }
  public set rentabilidadeMensal(value: number) {
    this._rentabilidadeMensal = value;
  }

  transferir(contaDestino: Conta, valor: number) {
    /*to do */
  }

  calcularSaldo() {
    /*to do */
  }
}