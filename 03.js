//Funtion declaration мы обьявляем функцию (можем обращаться к функции в любом месте)

// function greet(name) {
// console.log('Привет -', name);    
// }

// //Function expression мы создаем функцию и складываем в нее переменную (важен порядок написания строк кода)
// //не будет работать если обращение к функции будет стоять до самой функции

// const greet2 = function greet2(name) {
// console.log('Привет 2 -', name);
// }

// greet('Лена')
// greet2('Катя')

// console.dir(greet)

//анонимные функции
// let counter = 0

// const interval = setInterval(function(){
// if (counter===5) {
// clearInterval(interval)
// } else {
// console.log(++counter)
// }   
// }, 1000)

// стрелочные функции

// function greet(name) {
// console.log('Привет -', name);    
// }

// const arrow = (name) => {
// console.log('Привет -', name)
// }
// arrow('Илья')

// const arrow2 = name2 => console.log('Привет-', name2)
// arrow2('Игорь')

// const pow2 = num => num**2
// console.log(pow2(4))

// const sum = (a = 40, b = a*2) => a+b
// console.log(sum()) 

// function sumAll(...all) {
//     let result = 0
// for (let num of all) {
// result +=num    
// }    
// return result
// }

// const res = sumAll (1, 2, 3, 4, 5, 6, 65, 656)
// console.log(res)


// замыкания используются для защиты данных в JS

function createMember (name) {
return function(lastName) {
console.log(name + lastName)    
}   
} 
const logWithLastName = createMember ('Илья ')
console.log(logWithLastName ('Кудрицкий'))
console.log(logWithLastName ('Вильчковский'))