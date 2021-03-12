// Event loop

// setTimeout(() =>{
// console.log('after timeOut')
// }, 2500
// )

// const delay =(callback, wait =1000) => {
//     setTimeout(callback,wait)

// }
// delay (() => {
// console.log('after 2 sec')
// }, 2000)
const delay = (wait =1000) => {
 const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve()
  reject('smthg wrong try again')
  }, wait)
})
return promise
}
// delay(2500)
// .then(() => {
//     console.log('after 2 sec')
// })
// .catch( err => console.error('Error:', err))
// .finally(() => console.log('finally'))

const getData = () => new Promise (resolve => resolve([1, 1, 2, 3, 5, 8, 13]))
// getData().then(data => console.log(data))

async function asyncExample() {
    try {
        await delay(3000)
        const data = await getData()
        console.log ('Data', data)
    } catch(e) {
        console.log(e)
    }
  

}
asyncExample()