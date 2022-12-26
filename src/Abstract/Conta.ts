import { Credito } from "../Conta/Credito";
import { Debito } from "../Conta/Debito";

export abstract class Conta {
  
  private _creditos: Credito[] = [];
  private _debitos: Debito[] = [];

  constructor(
    private _numero: string
  ) {}

  /*getter / setter */
  public get debitos(): Debito[] {
    return this._debitos;
  }

  public set debitos(value: Debito[]) {
    this._debitos = value;
  }

  public get creditos(): Credito[] {
    return this._creditos;
  }

  public set creditos(value: Credito[]) {
    this._creditos = value;
  }

  public get numero(): string {
    return this._numero;
  }
  public set numero(value: string) {
    this._numero = value;
  }

  /*----*/

  public depositar(valor: number) {
    let credito: Credito = new Credito(valor, new Date());
    this.creditos.push(credito);
  }

  public sacar(valor: number) {
    /*se saldo maior ou igual ao valor de saque */
    if (this.calcularSaldo() >= valor) {
      let debito: Debito = new Debito(valor, new Date());
      this.debitos.push(debito);
    } else {
      console.log("Cliente não possui saldo suficiente!");
      return 0;
    }
  }

  abstract calcularSaldo(): number;
}