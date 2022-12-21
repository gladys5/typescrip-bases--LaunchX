import { UserContactInfo } from "./types"
function printContactInfo(info: UserContactInfo) {
  console.log(`${info.nombre} ${info.email}`)
}
const mama = {
  nombre: "Mama",
  email: "mama@mama.com",
  colorFavorito: "rojo",
}
printContactInfo(mama)
