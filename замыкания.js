//замыкания это функция внутри другой функции
function createCalc (n) {
    return function() {
        console.log(1000*n)
    }
}
createCalc(43) //на данном этапе ничего не происходит так как функция createCalc возвращает нам новую фукнкцию
const calcNew =createCalc(42)
console.log(calcNew) // в консоли следующее : ƒ () {
//     console.log(1000*n)
// }
// если мы вызовем calcNew() то есть функцию без параметров
calcNew() // здесь мы получаем результат умножения 1000*n = 42000
//вот как это работает: когда мы вызывали функцию createCalc и в нее передавали число 42, то
// то функция createCalc отработала и вернула нам новую функцию. но учитывая что данная функция была 
// вызвана в контексте функции createCalc, то переменная n оказалась замкнута в той функции которую 
// мы возвращаем. И поэтому когда мы вызываем calcNew, то в ней уже содержится переменная n


function createIncrementor(n) {
    return function(sum) {
        return n + sum
    }
}

const addOne = createIncrementor(1)
console.log(addOne(10))
console.log(addOne(40))

//пример для собеседования
function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}
function logPerson () {
    console.log(`Person:${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name:'Ilya', age: 32, job: 'worker'}
const person2 = {name:'JIm', age: 22, job: 'student'}
bind(person1,logPerson)()
bind(person2,logPerson)()