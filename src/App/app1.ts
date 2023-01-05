//Funcionario
import { Cargo } from "../Funcionario/Cargo";
import { Funcionario } from "../Funcionario/Funcionario";

/*
Aplicação 1
○ Crie dois funcionários do banco, um gerente e um atendente.
*/

//Cargos
const cargoGerente: Cargo = new Cargo("gerente");
const cargoAtendente: Cargo = new Cargo("atendente");

//Funcionarios
const funcionario1: Funcionario = new Funcionario(2100, "Eduardo", "123.111.222-00","55 5555-5555", [cargoAtendente]);
const funcionario2: Funcionario = new Funcionario(4000, "Carlos", "123.222.333-00","44 4444-4444", [cargoGerente]);

console.log("Funcionario 1: \n" + funcionario1.listarcargos())
console.log("Funcionario 2: \n" + funcionario2.listarcargos())