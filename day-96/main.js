let arry = ['davita', 19, 'is', 23131, 2333, 333, 'goat'];
let dict = [];
let newArr = [];

for (let i = 97; i < 123; i++) {
    dict.push(String.fromCharCode(i));
}

// for (let i = 0; i < arry.length; i++) {
//     // Convert the current array element to a string
//     let currentElement = String(arry[i]);

//     if(dict.some(letter => currentElement.includes(letter))){
//         newArr.push(arry[i]);
//     };
// };

console.log(newArr);