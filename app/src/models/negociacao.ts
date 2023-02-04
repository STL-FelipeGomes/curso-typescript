import { Modelo } from '../interfaces/modelo.js';

export class Negociacao implements Modelo<Negociacao> {
  /** Readonly
   *  Após um valor ser inserido na variável, o valor não poderá ser alterado, se tornando uma variável apenas de leitura
   */
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  /** Static
   * Ao tornar um método estático, não é necessário de nenhuma váriavel de instanância ( let metodo = new NomedaClasse())
   * Podendo ser utilizado sem a necessidade de instanciar. ( let metodo = NomedaClasse.metodoEstatico())
   */
  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }

  public paraTexto(): string {
    return `
      Data: ${this.data}
      Quantidade: ${this.quantidade}
      Valor: ${this.valor}
    `;
  }

  public ehIgual(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() === negociacao.data.getDate() &&
      this.data.getMonth() === negociacao.data.getMonth() &&
      this.data.getFullYear() === negociacao.data.getFullYear()
    );
  }
}
