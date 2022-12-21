let carro = {
  marca: "Ford",
  modelo: "Fiesta",
  anio: 2019,
  color: "rojo",
}
console.log(`${carro.marca} ${carro.modelo} ${carro.anio}}`)
function getCarro(carro: { marca: string; modelo: string; anio: number }) {
  console.log(`${carro.marca} ${carro.modelo} ${carro.anio}}`)
}

getCarro(carro)
let str = `${carro.marca} ${carro.modelo} ${carro.anio}`

if (typeof carro.anio === "number") {
  console.log(carro.anio)
}
