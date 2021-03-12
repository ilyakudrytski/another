// console.log('request data..')
// setTimeout(()=>{
// console.log('prepearing data')
// const backEndData = {              //как будто мы получаем данные с сервера
//        server: 'aws',
//        port: 2300,
//        status: 'working'
//    }
//    setTimeout(() => {
//        backEndData.modified = true
//        console.log('Data received', backEndData)
//    },2000)
// }, 2000)
// это класс в конструктор которого мы должны передать коллбэк, то есть функцию
//  reject когда у нас ошибка


// const p = new Promise(function(resolve, reject) {  
//     setTimeout(() => {                             
//         console.log('prepearing data')
//         const backEndData = {              
//                    server: 'aws',
//                    port: 2300,
//                    status: 'working'
//                 }
//         resolve(backEndData)        
//     }, 2000)

// })



// p. then(data => {                              
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)         
//         },2000)    
//     })                                        
// })
// .then(clientData => {
//      clientData.fromPromise =true
//      return clientData
// })
// .then(data => {
//     console.log('modified', data)
// })
// .catch(err => console.error('Error:', err))
// .finally(()=> console.log('finally'))

const sleep = ms => {
  return new Promise(resolve => {
      setTimeout(() => resolve(),ms)
    })
}

// sleep(2000).then (() => {
//     console.log('после 2 сек')
// })
// sleep(4000).then (() => {
//     console.log('после 4 сек')
// })

Promise.all([sleep(2000), sleep(3000)])
.then(() => {
    console.log('all promis')
})

Promise.race([sleep(2000), sleep(3000)])
.then(() => {
    console.log('race promis')
})