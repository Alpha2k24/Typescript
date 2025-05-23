const returnValue = <T> (value: T) => value 

const message = returnValue<string>("Olá mundo!")
const count = returnValue<number>(1)



function getFirstValueFromArray<Type>(value:Type[]) {
    return value[0];
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["1","2"])
const firstValueFromNumberArray = getFirstValueFromArray<number>([10,20])

 // Promises

const returnPromise = async(): Promise<number> =>{
    return 5
}