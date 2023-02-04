export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
    }
  }
  // @logarTempoDeExecucao(true)
  // @inspect
  public update(model: T): void {
    let template = this.template(model);
    this.elemento.innerHTML = template;
  }

  /** Abstract
   *  Um método abstrado é apenas um método que não possui implementação, sendo obrigado as classes filhas implementar
   */
  /** Protected
   *  Apenas as classes filhas conseguem utilizar o método
   */
  protected abstract template(model: T): string;
}
