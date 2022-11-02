let fname: string

fname = 'anita'

const newname = fname.toUpperCase()

console.log(newname);

let age: number

age = 25
age = 25.5

let dob = '25'

const result = parseInt(dob)

console.log(result)

let isLoading: boolean = false

console.log(isLoading)

let emptyList: string[]

emptyList =['Anita', 'Grace', 'Amarachi'].sort()

let deptList: Array<number>

deptList = [1, 2, 3, 4, 5]

let results = deptList.filter((num)=> num > 2)

let num = deptList.find((num)=> num ===2)

console.log(results)
console.log(num)
console.log(emptyList)

const enum color {
    red,
    yellow,
    Green
}

let myShirt = color.Green

console.log(myShirt)

let swapNumbs: [firstNumber: number, secondNumber: number]

function swapNumbers(num1: number, num2: number): [number, number] {

    return[num2, num1]
}

swapNumbs = swapNumbers(10, 20)
swapNumbs[0]
swapNumbs[1]

let department: any

department = 'IT'
department = 1
