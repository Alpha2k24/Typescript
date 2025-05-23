
const log = (message: string): void => {
    console.log(message)
}

interface MathFunc {
    (x:number,y:number):number;
}

const sum: MathFunc = (x: number,y:number)=>{
    return x+y
}