import { Endereco } from "./Endereco";

class Cliente {
  private enderecos: Endereco[] = [];

  constructor(
    private _vip: boolean,
    endereco: Endereco
  ) {
    this.enderecos.push(endereco);
  }
  
  /*getter / setter */
  public get vip(): boolean {
    return this._vip;
  }

  public set vip(value: boolean) {
    this._vip = value;
  }

  /*endereco */
  public addEndereco(endereco: Endereco){
    this.enderecos.push(endereco);
  }

  public removeEndereco(endereco: Endereco){
    /*to do*/
  }

  public listarEnderecos() {
    this.enderecos.forEach(endereco => {
      console.log(endereco.toString())
    });
  }
}