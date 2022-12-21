abstract class poligono {
  abstract getArea(): number
}
class Rectangulo2 extends poligono {
  constructor(public base: number, public altura: number) {
    super()
  }
  getArea() {
    return this.base * this.altura
  }
}
