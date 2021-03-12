const cars = ['mazda', 'BMW', 'porcshe', 'liaz',]
const fib = [1, 1, 2, 3, 5, 8, 13]
// function

// function addItemToEnd(){

// }

//method
// cars.push('renault') 
// console.log(cars)

// cars.unshift('Lada')
// console.log(cars)
// const firstItem = cars.shift()
// const lastItem = cars.pop()
// console.log(cars)

// cars.reverse()
// console.log(cars);

// задача 1

// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join(' ')
// console.log(reverseText)

// const index = cars.indexOf('liaz')
// cars[index]= 'vesta'
// console.log(cars)

// const people = [
// {name: 'ilya', budget: 4200},
// {name: 'igor', budget: 1200},
// {name: 'klim', budget: 800},
// {name: 'lera', budget: 8400},
// {name: 'stas', budget: 600}    
// ]

// const index = people.findIndex(function(person){
// return person.budget ===1200
// })
// console.log(people[index])

// const index = people.find(function(person){
// return person.name === 'ilya'    
// })
// console.log(index)


// let findedPerson 
// for (const person of people) {
// if (person.budget=== 4200) {
// findedPerson = person    
//   }
// }
// console.log(findedPerson)

// const person = people.find(person=> person.budget=== 600)     

// console.log(person)

// console.log(cars.includes('liaz'))

// const upperCaseCars = cars.map(car => {
// return car.toUpperCase()    
// })
// console.log(upperCaseCars)


// const func = num => num**2
// const sqrt = num => Math.sqrt(num)
// const pow =fib.map(func).map(sqrt)
// console.log(pow)

// const func = num => num**2
// const pow =fib.map(func)
// const filteredNumbers = pow.filter(num => num >20)
// console.log(filteredNumbers)

const people = [
    {name: 'ilya', budget: 4200},
    {name: 'igor', budget: 1200},
    {name: 'klim', budget: 800},
    {name: 'lera', budget: 8400},
    {name: 'stas', budget: 600}    
    ]

 const allBudget = people.filter(person => person.budget>1000).reduce((acc, person) => {
          acc += person.budget
     return acc
    }, 0)

    console.log(allBudget)