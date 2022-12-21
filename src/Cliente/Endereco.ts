export class Endereco {

  constructor(
    private _cep: string,
    private _logradouro: string,
    private _numero: string,
    private _complemento: string,
    private _cidade: string,
    private _uf: string
  ) {}

  toString() : string {
    return `Endereco: \n 
    Cep: ${this._cep} \n 
    Logradouro: ${this._logradouro} Numero: ${this._numero}\n 
    Cidade: ${this._cidade} UF: ${this._uf} \n`
  }

  public get uf(): string {
    return this._uf;
  }
  public set uf(value: string) {
    this._uf = value;
  }
  public get cidade(): string {
    return this._cidade;
  }
  public set cidade(value: string) {
    this._cidade = value;
  }
  public get complemento(): string {
    return this._complemento;
  }
  public set complemento(value: string) {
    this._complemento = value;
  }
  public get nunmero(): string {
    return this._numero;
  }
  public set numero(value: string) {
    this._numero = value;
  }
  public get logradouro(): string {
    return this._logradouro;
  }
  public set logradouro(value: string) {
    this._logradouro = value;
  }
  public get cep(): string {
    return this._cep;
  }
  public set cep(value: string) {
    this._cep = value;
  }


}