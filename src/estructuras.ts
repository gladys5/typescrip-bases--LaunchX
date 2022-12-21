class Carro {
  fabricante: string
  modelo: string
  anio: number
  isElectric: boolean
}
class Trailer {
  fabricante: string
  modelo: string
  anio: number
  isElectric: boolean
  capacidad: number
}

const vehiculo = {
  fabricante: "Ford",
  modelo: "Fiesta",
  anio: 2019,
}

function printCar(car: Carro) {
  console.log(`${car.fabricante} ${car.modelo} ${car.anio}}`)
}
