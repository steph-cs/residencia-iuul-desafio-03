class Debito{
  
  constructor(
    private _valor: number,
    private _data: Date
  ){}

  public get data(): Date {
    return this._data;
  }
  public set data(value: Date) {
    this._data = value;
  }
  public get valor(): number {
    return this._valor;
  }
  public set valor(value: number) {
    this._valor = value;
  }
}