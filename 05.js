const aircraft = {
name: 'Concord',
yearOfProduction: 2001,
isUsing: true,
countryUsage: ['Usa', 'Fin', 'Lit'],
greet() {
console.log('Airplane info')    
},
info() {
    console.info('инфа про самолет:', this.name)
}
}

// const nameAir = aircraft.name
// const age = aircraft.yearOfProduction
// const country = aircraft.countryUsage

// const {name, yearOfProduction, countryUsage}=  aircraft
// console.log(name, yearOfProduction, countryUsage)

// for (let key in aircraft) {
//     if (aircraft.hasOwnProperty(key)) { // важный момент на собесе, необходимо защитить свойства прототипа
// console.log('key:', key)
// console.log('value:', aircraft[key]);
// }
// }
//  const keys = Object.keys(aircraft) // Object.key не входит в поля прототипа следовательно не надо проводить проверку if...

//  keys.forEach((key) => {
//     console.log('key:', key)
//     console.log('value:', aircraft[key])
//  }
//  )

// Context
// aircraft.info()

const logger = {
keys() {
console.log('object Keys:', Object.keys(this))    
},
keysAndValues() {
   Object.keys(this).forEach(key => {
       console.log(`"${key}":${this[key]}`)

   })
 }
}
// const bound = logger.keys.bind(logger)
// bound() 
// logger.keys.call(aircraft)
logger.keysAndValues.call(aircraft)