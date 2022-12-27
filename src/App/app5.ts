//Cliente
import { Cliente } from "../Cliente/Cliente";
import { Endereco } from "../Cliente/Endereco";
//Contas
import { ContaPoupanca } from "../Conta/ContaPoupanca";

/*
● Aplicação 5
○ Crie um cliente que possua uma ContaPoupanca
○ Defina a rentabilidadeMensal em 1%
○ Efetue 1 depósito por mês de 200 reais do dia 01/01/2022 até 31/12/2022
○ Efetue um saque de 100 reais no dia 05/03/2022
○ Efetue um saque de 200 reais no dia 08/07/2022
○ Calcule o saldo da conta poupança considerando os rendimentos
*/

/*Enderecos */
const endereco1 = new Endereco("111", "Rua X", "1", "apt 1", "Florianopolis", "SC");

/*Contas */

//Conta poupanca
const conta1: ContaPoupanca = new ContaPoupanca(1, "444");


/*Clientes */
const cliente1 = new Cliente(true, "Stephanie", "123.123.123-12", "(99)9 9999-9999", [endereco1], [conta1]);

/*Transacoes */
let data: Date = new Date("2022-1-1");
for (let i = 0; i < 12; i++) {
  conta1.depositar(1000, data);
}

conta1.sacar(100, new Date("2022-3-5"));
conta1.sacar(100, new Date("2022-7-8"));

console.log("Saldo conta 1: R$" + conta1.calcularSaldo())