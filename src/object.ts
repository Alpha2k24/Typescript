// Type

type Order = {
    productId: string
    price: number
}

type User = {
    firstName: string
    age: number
    email?: string
    password?: string
    order: Order[]
}

const user: User = {
    firstName: "Lola",
    age: 2,
    order: [{ price: 1000, productId: "1" }]
}

const printLog = (message: string)=>{}
printLog(user.email!) //esse ponto de exclamação significa que eu tenho a certeza que esse valor nunca chegará aqui vazio.




//Unions
type Author = {
    books: string[]
}

const author: Author & User = {
    books: ["1","2"],
    age: 1,
    firstName: "Lola",
    order: [{price:1000,productId:"1"},{price:5000,productId:"2"}],
    email: "",
    password: ""
}

// Interfaces
interface UserInterface {
    readonly firstName: string
    email: string
}

const emailUser: UserInterface = {
    firstName: "Lara",
    email: ""
}

// emailUser.firstName = "2" impossível atribuir valores para propriedades de somente leitura(readonly)




