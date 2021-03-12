function hello() {
    console.log('hello', this)
}

const person = {
    firstName: 'ILya',
    age: 32,
    sayHello: hello, 
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.firstName} info:`)
        console.log(`Name is ${this.firstName}`)
        console.log(`Age is ${this.age}`)
        console.log(`job is ${job}`)
        console.log(`phone is ${phone}`)
        console.groupEnd()
    }

}

const Fedor = {
    firstName: 'Fedor',
    age: 56
}

// const fnFedorLogInfo = person.logInfo.bind(Fedor)
// person.logInfo.bind(Fedor,'editor', '+37529235689') () // метод bind возвращает новую функцию и ее мы можем вызвать когда нам это будет нужно
// person.logInfo.call(Fedor,'editor', '+37529235689') //метод call сразу же вызывает новую функцию (не надо ставить круглые скобки)
person.logInfo.apply(Fedor,['editor', '+37529235689']) // тот же метод что и call разница в передаче переменых. Здесь всегда два параметра и второй это массив со всеми значениями



const array = [1, 2, 3, 5, 6]
function multByNumb(arr, n) {   // в функцию multByNumb мы передаем некий массив arr и число n
    return arr.map(function(i)  {  //мы возвращаем массив arr с помощью метода map, который мутирует наш объект. мутирование происходит с помощью функции
        return i*n} // для каждого i-того элемента происходит умножение на параметр n и возврат результата в массив arr 
    )}

    console.log(multByNumb(array, 5))

    const massiv = [3, 4, 5, 7, 8, 9]

    Array.prototype.multByNumb = function(n) {  // с помощью этого приема мы создаем метод для всех объектов Array
       return this.map(function(i) { 
            return i*n})
       }
            console.log(massiv.multByNumb(6))