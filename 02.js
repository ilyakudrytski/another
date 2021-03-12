function logPerson(s, name, age) {
if (age < 0){
age = 'еще не родился'   
}  
return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Илья'
const personAge = 32
const personAge2 = -50
const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`// на самом деле мы возвращаем в функцию массив
const output2 = logPerson`Имя: ${personName}, Возраст: ${personAge2}!`
console.log(output)
console.log(output2)