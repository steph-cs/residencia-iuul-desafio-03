export class Cargo {
  constructor(
    private _nome: string
  ) {}

  public toString(){
    return `Cargo{
      _nome: ${this.nome} 
      }`
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
 }