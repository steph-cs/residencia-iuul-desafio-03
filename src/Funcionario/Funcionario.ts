class Funcionario {

  constructor(
    private _salario: number
  ) {}
  
  public get salario(): number {
    return this._salario;
  }
  public set salario(value: number) {
    this._salario = value;
  }
  
}