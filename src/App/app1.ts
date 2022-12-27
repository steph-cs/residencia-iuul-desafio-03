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






/*Execucao */


//console.log(cliente1.listarContas())
//console.log(cliente2.listarContas())

//console.log()


/*Conta Corrente*/
/*
conta1.depositar(800);
conta2.depositar(600);

conta1.transferir(conta2, 200);

console.log("\n====Conta 1: Creditos/Debitos====\n");
console.log(conta1.creditos);
console.log(conta1.debitos);
console.log("\n====Conta 2: Creditos/Debitos====\n");
console.log(conta2.creditos);
console.log(conta2.debitos);

conta2.sacar(150);
console.log("\n====Conta 2: Creditos/Debitos====\n");
console.log(conta2.creditos);
console.log(conta2.debitos);
*/

/*Saldos Conta Corrente */
/*
console.log("\n====Conta 1====");
console.log(`Saldo = ${conta1.calcularSaldo()}`);
console.log("\n====Conta 2====");
console.log(`Saldo = ${conta2.calcularSaldo()}`);
*/


/*Conta Poupanca*/
/*
conta3.depositar(1200, new Date("2020-6-1"));
let data = new Date("2020-6-1");
console.log(data,toString())
conta3.sacar(200, new Date("2020-6-1"));

conta3.depositar(200, new Date("2021-1-22"));
conta3.sacar(10, new Date("2021-1-26"));

conta3.sacar(200, new Date("2021-3-28"));

conta3.depositar(100, new Date("2022-1-28"));
conta3.sacar(50, new Date("2022-1-28"));
*/
//conta4.depositar(600, new Date("2020-8-20"));
//conta4.depositar(500);
/*
console.log("\n====Conta 1: Creditos/Debitos====\n");
console.log(conta3.creditos);
console.log(conta3.debitos);
console.log("\n====Conta 2: Creditos/Debitos====\n");
console.log(conta4.creditos);
console.log(conta4.debitos);
*/
//conta4.sacar(150);
/*
console.log("\n====Conta 2: Creditos/Debitos====\n");
console.log(conta4.creditos);
console.log(conta4.debitos);
*/

/*Saldos Conta Poupanca */
/*
console.log("\n====Conta 3====");
console.log(`Saldo = ${conta3.calcularSaldo()}`);
console.log("Rendimento: " + conta3.calcularRendimento())
//console.log("\n====Conta 4====");
//console.log(`Saldo = ${conta4.calcularSaldo()}`);

*/
