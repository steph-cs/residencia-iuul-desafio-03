//Cliente
import { Cliente } from "../Cliente/Cliente";
import { Endereco } from "../Cliente/Endereco";
//Contas
import { ContaCorrente } from "../Conta/ContaCorrente";
import { ContaPoupanca } from "../Conta/ContaPoupanca";

/*
● Aplicação 4
○ Crie um cliente que possua uma ContaCorrente
○ Efetue um depósito de 1000 nessa ContaCorrente
○ Crie um cliente que possua uma ContaPoupanca
○ Efetue um depósito de 1000 reais nessa conta Poupanca
○ Efetue uma transferência de 500 reais da ContaCorrente para ContaPoupanca
*/

/*Enderecos */

const endereco1 = new Endereco("111", "Rua X", "1", "apt 1", "Florianopolis", "SC");
const endereco2 = new Endereco("222", "Rua X", "2", "apt 2", "Florianopolis", "SC");

/*Contas */

//Conta corrente
const conta1: ContaCorrente = new ContaCorrente(0, "111");
//Conta poupanca
const conta2: ContaPoupanca = new ContaPoupanca(20, "444");

/*Clientes */
const cliente1 = new Cliente(true, "Stephanie", "123.123.123-12", "(99)9 9999-9999", [endereco1], [conta1]);
const cliente2 = new Cliente(true, "Bruna", "123.123.123-12", "(99)9 9999-9999", [endereco2], [conta2]);

/*Transacoes */
conta1.depositar(1000);
conta2.depositar(1000);

conta1.transferir(conta2, 500);

console.log("Saldo conta 1: " +conta1.calcularSaldo())
console.log("Saldo conta 2: " +conta2.calcularSaldo())