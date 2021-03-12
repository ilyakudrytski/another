//нахождение минимума и максимума с помощью функции Math.min и Math.max
const array1 = [45,12,9,47,89,17,45,8,24,91]
// const min = array1 => Math.min(...array1) // создаем функцию min в которую передаем наш массив, затем вызывем у этой функции метод Math.min который пробегает по всему массиву
// console.log(min(array1))
// const max = array1 => Math.max(...array1)
// console.log(max(array1))

// function min(array1) {              //тот же вариант но запись длиннее
//     return Math.min(...array1)

// }
// console.log(min(array1))

// встроенная сортировка массива и вывод по нулевому индексу

// const min = function(array1) {
//     array1.sort((a,b) => {
//         return (a - b)
//     })
//     return array1[0]
// }
// console.log(min(array1))

// const max = function(array1) {
//     array1.sort((a,b) => {
//         return (b - a)
//     })
//     return array1[0]
// }
// console.log(max(array1))


// самый длинный способ через циклы for и if


// const min =function(array1) {
//     let minValue = array1[0]
//     for (i=0; i<array1.length; i++) {
//         let currentValue = array1[i]
//         if (currentValue<minValue) {
//            minValue=currentValue       

//         }
       
//     }  
//     return minValue  
// }

// console.log(min(array1))

// const max =function(array1) {
//     let maxValue = array1[0]
//     for (i=0; i<array1.length; i++) {
//         let currentValue = array1[i]
//         if (currentValue>maxValue) {
//             maxValue=currentValue       

//         }
       
//     }  
//     return maxValue  
// }

// // console.log(max(array1))

// function stringy(size) {
//     var str=''
//     for( var i=1; i<=size; i++ ) {
//       str+=i%2
//     }
//     return str
// }
const s = "The quick white fox jumped around the massive dog"

// function findLongest(str) {
  
//   let spl = str.split(" ")
//   let longest = 0
  
//   for (let i = 0; i < spl.length; i++) {
//     if (spl[i].length > longest) {
//       longest = spl[i].length
//     }
//     }
//     return longest
// }

// function findLongest(str) {
  
//   let spl = str.split(" ");
//   let longest = 0;
  
//   for (let i = 0; i < spl.length; i++){
  
//     if (spl[i].length > longest) {
//       longest = spl[i].length;
//     }
//   }
//     return longest;
// }

// function findLongest(str) {
//   var spl = str.split(" "),
//       longest = 0;
  
//   for (var i in spl) {
//     if (spl[i].length > longest) {
//       longest = spl[i].length;
//     }
//   }

//   return longest;
// }
//  console.log(findLongest(str));

 const findLongest = s => Math.max(...s.split(" ").map(x => x.length))
console.log(findLongest(s))