const person = Object.create({
calculateAge() {
    console.log('age:',new Date().getFullYear() - this.birthYear)
}
},
{
    name: {
        value: 'Ilya',
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear: {
        value: 1988,
        enumerable: false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.background='blue'

        }
    }
})

person.name = 'max'


for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('key', key, person[key])
    }
}