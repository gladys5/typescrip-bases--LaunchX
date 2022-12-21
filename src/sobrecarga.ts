interface Figura {
  getArea: () => number
}
class Rectangulo implements Figura {
  constructor(public base: number, public altura: number) {}
  getArea() {
    return this.base * this.altura
  }
}
class Circulo implements Figura {
  constructor(public radio: number) {}
  getArea() {
    return Math.PI * Math.pow(this.radio, 2)
  }
}
class Cuadrado extends Rectangulo {
  constructor(lado: number) {
    super(lado, lado)
  }
}
