let age: number = 5;
const firstName: string = "Felipe";
const isV: boolean = true
let idk: any = 5

const ids: string[] = ["1","2","3","4","5"]

//tupla
const person: [number,string] = [1,"Gaspar"]
const people: [number,string][] = [
    [1,"Gaspar"],
    [2,"Sibo"]
]

//Intersections
const productId: string|number = "0"

//Enum
enum Direction {
    Up = 1,
    Down = 2
}

const direction = Direction.Down

// Type Assertions
const productName: any = "Boné"

//let itemId = productName as string
let itemId = <string> productName

console.log(direction);