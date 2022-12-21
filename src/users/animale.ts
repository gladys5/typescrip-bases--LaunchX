class animal {
  nombre: string
  edad: number
  constructor(nombre: string, edad: number) {
    this.nombre = nombre
    this.edad = edad
  }
}
class gato extends animal {
  color: string
  constructor(nombre: string, edad: number, color: string) {
    super(nombre, edad)
    this.color = color
  }
}
class pollo extends animal {
  raza: string
  constructor(nombre: string, edad: number, raza: string) {
    super(nombre, edad)
    this.raza = raza
  }
}
