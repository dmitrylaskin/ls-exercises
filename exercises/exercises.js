//Task #1
// let getVowels = (str) => {

//     let vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я']
//     let lowStr = str.toLowerCase()
//     let result = ''

//     for (i = 0; i < lowStr.length; i++) {
//         if (vowels.includes(lowStr[i])) {
//             result = result + lowStr[i]
//         }
//     }
//     return result
// }
// console.log(getVowels("ПрИвЕт! Как дЕла?"));





//Task #2
// const workers = [
//     {name:"John",salary:500},
//     {name:"Mike",salary:1300},
//     {name:"Linda",salary:1500}];

// const getWorthyWorkers = (arr) => {
//     return arr.filter(person => person.salary > 1000)
//                 .map(person => person.name).join(',')
    
// }
// console.log(getWorthyWorkers(workers))




//Task #3
// const isHtml = (path) => path.search(/\.html$/) !== -1 ? true : false

// console.log(isHtml("/users/download/index.html"));


//Task #4
// const mixedArray = [3,13,74,14,66,15,22,4];

// const isEven = (num) => num % 2 === 0 ? true : false
// const filterArray = (arr, fn) => arr.filter(num => fn(num))

// console.log(filterArray(mixedArray, isEven))


