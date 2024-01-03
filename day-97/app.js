/* Task 1: Sorting Numbers

Write a function called sortNumbers that takes an array of numbers as input and returns a new array of numbers sorted in ascending order.

Test your function with a sample array of numbers and log the sorted result to the console.

Task 2: Filtering Numbers

Using the same array of numbers from Task 1, write a function called filterEvenNumbers that takes one argument: an array of numbers.

The function should return a new array containing only the even numbers.

Test your function with a sample array of numbers and log the filtered result to the console. */

const sortedArrFunct = () => {

    let mixArr = [1, 24, 2, 23, 56, 111, 4, 6];
    let arrLength = mixArr.length;
    let num;

    for (let i = 0; i < arrLength; i++) {
        for (let j = 0; j < arrLength; j++) {
            if(mixArr[j] > mixArr[j + 1]){
                num = mixArr[j];
                mixArr[j] = mixArr[j+1];
                mixArr[j + 1] = num;
            }
        }
    }

    console.log(mixArr);
}
sortedArrFunct();
const filterNumberFunct = () => {
    let arr = [1,2,3,4,45,56,3,2,56,36,787];

    let filterArr = arr.filter((el) =>{
        return el % 2 == 0;
    });
    console.log(filterArr);
};
filterNumberFunct();