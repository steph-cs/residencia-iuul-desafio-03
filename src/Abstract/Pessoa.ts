
export abstract class Pessoa {

  public get telefone(): string {
    return this._telefone;
  }
  public set telefone(value: string) {
    this._telefone = value;
  }
  public get cpf(): string {
    return this._cpf;
  }
  public set cpf(value: string) {
    this._cpf = value;
  }
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  constructor(
    private _nome: string,
    private _cpf: string,
    private _telefone: string
  ) { }

}