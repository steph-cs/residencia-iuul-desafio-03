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

  public depositar(valor: number, data?: Date) {
    let credito: Credito;

    //se foi passado uma data enta gera credito c a data
    if(typeof data !== "undefined"){
      credito = new Credito(valor, data);
    }else{
      data = new Date();
      //credito padrao data atual
      credito = new Credito(valor, new Date());
    }
    //adiciona credito lista de creditos
    console.log(`Deposito de R$${valor} data: ${data.toLocaleDateString()} efetuado!`);
    this.creditos.push(credito);
  }

  public sacar(valor: number, data?: Date) {
    var saque: boolean = false;
    let debito: Debito;

    //se foi passado uma data enta gera debito c a data
    if(typeof data !== "undefined"){
      debito = new Debito(valor, data);
    }else{
      data = new Date();
      //debito padrao data atual
      debito = new Debito(valor, data);
    }
    
    /*se saldo maior ou igual ao valor de saque */
    if (this.calcularSaldo() >= valor) {
      this.debitos.push(debito);
      saque = true;
      console.log(`Saque de R$${valor} data: ${data.toLocaleDateString()} efetuado!`);
    } else {
      console.log("Cliente não possui saldo suficiente!");
    }
    return saque;
  }

  abstract calcularSaldo(): number;
}