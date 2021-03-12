//1 переменные
// variable

// если мы создаем переменную nfame через var, то в дальнейшем мы можем давать
//  ей новые значения см строку ниже


const lastName = 'Kudr' //по правилам хорошего тона неизменяемые в дальнейшем переменные 
// называют const
// переменные const доступны только для чтения


let age = 26 //используют вместо var


nfame = 'il' //мы изменили переменную var

// lastName = 'Kudrytski' //мы не можем изменить переменную const 
console.log(nfame)
console.log(lastName) 
// c помощбю этой конструкции мы можем следить за некоторыми величинами 
// или параметрами прямо в консоли


//2 мутирование

// console.log('имя человека:' + firstName + ', а возраст человека: ' + age)
//console.log('имя человека:' + firstName + ', а возраст человека: ' + age)
// prompt(message: 'введите фамилию')

// 3 операторы

const currentYear = '2020'
const birthAge ='1988'
const agge = currentYear - birthAge
console.log(agge)
