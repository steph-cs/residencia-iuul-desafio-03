import { Conta } from "../Abstract/Conta";

export class ContaPoupanca extends Conta {

  constructor(
    private _rentabilidadeMensal: number,
    _numero: string
  ) {
    super(_numero);
  }

  /*getter / setter */
  public get rentabilidadeMensal(): number {
    return this._rentabilidadeMensal;
  }
  public set rentabilidadeMensal(value: number) {
    this._rentabilidadeMensal = value;
  }

  /*----*/

  public calcularRendimento(): number {

    const anoInicio = this.creditos[0].data.getFullYear();
    const anoFinal = this.creditos[this.creditos.length - 1].data.getFullYear();

    var rendimentoTotal: number = 0;

    //por ano
    for (let i = 0; i <= anoFinal - anoInicio; i++) {
      const creditosAno = this.creditos.filter((value) => value.data.getFullYear() == anoInicio + i);
      const debitosAno = this.debitos.filter((value) => value.data.getFullYear() == anoInicio + i);

      //por mes
      const dataAtual = new Date();
      let mesFinal: number = creditosAno[creditosAno.length - 1].data.getMonth();
      for (let m = creditosAno[0].data.getMonth(); m <= mesFinal; m++) {
        let rendimentoMes: number = 0;
        const creditosMes = creditosAno.filter((value) => value.data.getMonth() == m);
        const debitosMes = debitosAno.filter((value) => value.data.getMonth() == m);
        //soma creditos
        creditosMes.forEach(credito => {
          rendimentoMes += credito.valor;
        })
        //subtrai debitos
        debitosMes.forEach(debito => {
          rendimentoMes -= debito.valor;
        })
        //calculo rendimento ate data atual
        let anosMeses = (dataAtual.getFullYear() - (anoInicio + i)) * 12;
        let numMeses = ((anosMeses + 12) - (m + 1));
        rendimentoTotal += numMeses * (rendimentoMes * this.rentabilidadeMensal / 100);
      }
    }
    return rendimentoTotal;
  }

  public calcularSaldo(): number {
    let saldo: number = 0;
    //soma creditos
    this.creditos.forEach(credito => {
      saldo += credito.valor;
    });
    //subtrai debitos
    this.debitos.forEach(debito => {
      saldo -= debito.valor;
    })
    //soma rendimento

    saldo += this.calcularRendimento();
    return saldo;
  }
}