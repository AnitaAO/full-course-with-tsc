//this will return a number
function add(num1: number, num2: number): number {
    return num1 + num2
}

//using if/condition to add numbers
function addition(num1: number, num2: number, num3?: number) : number {
    return num3? num1 + num2 + num3 : num1 + num2
}

console.log(addition(2, 1, 3))

console.log(add(2, 3))

//this will return void, i.e return nothing
function Sum(num1: number, num2: number) {
    num1 + num2
}

console.log(Sum(1, 2))

const sub = (num1: number, num2: number) : number => num1 - num2

console.log(sub(5, 3))

const mult = function(num1: number, num2: number) : number {
    return num1 * num2
}

console.log(mult(2, 4))

//rest parameters
function rest(num1: number, num2: number, ...num3: number[]){
    return num1 + num2 + num3.reduce((a, b) => a + b, 0)
}

console.log(rest(3, 4, ...[5, 1, 3, 6]))

//generic function
function getItems<T>(items: T[]): T[] {
    return new Array<T>().concat(items)
}

let concatResult = getItems<number>([1, 2, 3, 4, 5])

let concatString = getItems<string>(['a', 'b', 'c', 's', 'f'])
