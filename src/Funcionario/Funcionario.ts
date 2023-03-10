import { Pessoa } from "../Abstract/Pessoa";
import { IUsuario } from "../Interface/IUsuario";
import { Cargo } from "./Cargo";

export class Funcionario extends Pessoa implements IUsuario {

  private cargos: Cargo[] = [];

  constructor(
    private _salario: number,
    nome: string,
    cpf: string,
    telefone: string,
    cargos: Cargo[]
  ) {
    super(nome, cpf, telefone);
    this.cargos.push(...cargos);
  }

  public autenticar(): boolean {
    return true;
  }

  public get salario(): number {
    return this._salario;
  }
  public set salario(value: number) {
    this._salario = value;
  }

  /*cargo */
  public addcargos(cargos: Cargo[]) {
    this.cargos.push(...cargos);
  }

  public removercargos(cargosRemover: Cargo[]) {
    /*se numero de cargos cadastrados maior cargos a remover; remove */
    if (this.cargos.length > cargosRemover.length) {
      cargosRemover.forEach(cargoRemover => {
        this.cargos.forEach(cargo => {
          if (cargo == cargoRemover) {
            let index: number = this.cargos.indexOf(cargo);
            this.cargos.splice(index, 1);
          }
        });
      });
    }
  }

  public listarcargos() {
    return this.cargos;
  }
}