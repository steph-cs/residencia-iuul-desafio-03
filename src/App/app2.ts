//Cliente
import { Cliente } from "../Cliente/Cliente";
import { Endereco } from "../Cliente/Endereco";
//Contas
import { ContaCorrente } from "../Conta/ContaCorrente";

/*
● Aplicação 2
○ Crie um cliente e adicione 3 endereços a ele
○ Imprima os endereços desse cliente
*/

/*Enderecos */

const endereco1 = new Endereco("111", "Rua X", "1", "apt 1", "Florianopolis", "SC");
const endereco2 = new Endereco("222", "Rua X", "2", "apt 2", "Florianopolis", "SC");
const endereco3 = new Endereco("333", "Rua X", "3", "apt 3", "Florianopolis", "SC");

/*Contas */

//Conta corrente
const conta1: ContaCorrente = new ContaCorrente(0, "111");

/*Clientes */
const cliente1 = new Cliente(true, "Stephanie", "123.123.123-12", "(99)9 9999-9999", [endereco1, endereco2, endereco3], [conta1]);

console.log(cliente1.listarEnderecos());
