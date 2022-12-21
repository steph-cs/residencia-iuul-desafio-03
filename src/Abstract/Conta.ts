export abstract class Conta {
  constructor(
    private numero: string
  ) {}

  abstract depositar(valor: number) : void;

  abstract sacar(valor: number) : void;

  abstract calcularSaldo() : number;
}