interface UserInfo {
  name: string
  email: string
}

function printContactInfo(info: UserInfo) {
  console.log(`${info.name} ${info.email}`)
}
