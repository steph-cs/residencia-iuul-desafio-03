import { Pessoa } from "../Abstract/Pessoa";
import { Cargo } from "./Cargo";

export class Funcionario extends Pessoa {

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
            console.log("Cargo removido!");
          }
        });
        console.log(`Funcionário não possui o cargo cadastrado: \n ${cargoRemover.toString()}`);
      });
    } else {
      console.log("Funcionário deve possuir pelo menos um cargo cadastrado!");
    }
  }

  public listarcargos() {
    return this.cargos;
  }
}