import { Conta } from "../Abstract/Conta";

export class ContaCorrente extends Conta {

  constructor(
    private _limite: number,
    _numero: string
  ) {
    super(_numero);
  }

  /*getter / setter */
  public get limite(): number {
    return this._limite;
  }
  
  public set limite(value: number) {
    this._limite = value;
  }

  /*----*/

  public transferir(contaDestino: Conta, valor: number) {
    /*se saldo maior ou igual ao valor de saque */
    if(this.sacar(valor)) {
      contaDestino.depositar(valor);
    }
  }

  public calcularSaldo(): number {
    let saldo: number = 0;
    //soma creditos
    this.creditos.forEach(credito => {
      saldo += credito.valor;
    });
    //subtrai debitos
    this.debitos.forEach(debito => {
      saldo -= debito.valor;
    })
    //soma limite
    saldo += this.limite;
    return saldo;
  }

}