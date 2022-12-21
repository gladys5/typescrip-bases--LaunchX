let x: unknown = "hola"
function saludar(saludo: string) {
  console.log(saludo)
}
saludar(x as string)
