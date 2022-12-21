import { Conta } from "../Abstract/Conta";

class ContaCorrente {
  constructor(
      private _limite: number
  ) {}

  public get limite(): number {
    return this._limite;
  }
  public set limite(value: number) {
    this._limite = value;
  }
 
  transferir(contaDestino: Conta, valor: number){
    /*to do */
  }

  calcularSaldo(){
    /*to do */
  }
}