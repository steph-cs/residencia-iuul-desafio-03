 class Cargo {

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
  
  constructor(
    private _nome: string
  ) {}
 }