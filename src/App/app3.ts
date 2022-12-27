//Cliente
import { Cliente } from "../Cliente/Cliente";
import { Endereco } from "../Cliente/Endereco";
//Contas
import { ContaCorrente } from "../Conta/ContaCorrente";

/*
● Aplicação 3
○ Crie um cliente que possua uma ContaCorrente
○ Efetue três depósitos de 100 nessa ContaCorrente
○ Efetue um saque de 50 reais nessa ContaCorrente
○ Imprima o valor do saldo dessa ContaCorrente
*/

/*Enderecos */
const endereco1 = new Endereco("111", "Rua X", "1", "apt 1", "Florianopolis", "SC");

/*Contas */

//Conta corrente
const conta1: ContaCorrente = new ContaCorrente(0, "111");

/*Clientes */
const cliente1 = new Cliente(true, "Stephanie", "123.123.123-12", "(99)9 9999-9999", [endereco1], [conta1]);

/*Transacoes */
for(let i = 0; i< 3; i++) conta1.depositar(100);
conta1.sacar(50);
console.log("Saldo: R$" + conta1.calcularSaldo());