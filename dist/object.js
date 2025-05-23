"use strict";
// Type
const user = {
    firstName: "Lola",
    age: 2,
    order: [{ price: 1000, productId: "1" }]
};
const printLog = (message) => { };
printLog(user.email); //esse ponto de exclamação significa que eu tenho a certeza que esse valor nunca chegará aqui vazio.
const author = {
    books: ["1", "2"],
    age: 1,
    firstName: "Lola",
    order: [{ price: 1000, productId: "1" }, { price: 5000, productId: "2" }],
    email: "",
    password: ""
};
const emailUser = {
    firstName: "Lara",
    email: ""
};
// emailUser.firstName = "2" impossível atribuir valores para propriedades de somente leitura(readonly)
