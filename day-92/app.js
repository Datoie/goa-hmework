// variables for elements
// book  
const bookAnswer = document.querySelectorAll('.ansver-t')
const bookClick = document.getElementsByTagName ('h1')

// circle
const circleText = document.querySelector('.circle-t')
const calcArea = document.querySelector('.calculate-area')
const currentRadius = document.querySelectorAll('.radius')[1]
const hideText = document.querySelector('.error-t')
// console.log(hideText)

// students
const studentBtn = document.querySelector('.student');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const gradeArr = document.querySelectorAll('.grades');

// event listeners
// book click
bookClick[0].addEventListener('click', bookObj);

// cicrle radius click
circleText.addEventListener('click', cicleCalculator);

// stundetns grader click
studentBtn.addEventListener('click', studentsGrader);


// book object
function bookObj (){
    let book = {
        title: prompt('Enter title'),
        author: prompt('Enter author'),
        years: prompt('Enter years')
    }

    // if book porpery is must be strings it should brought out to the html
    if(typeof book.title === 'string' ){
        bookAnswer[0].innerHTML = book.title
    }
    if(typeof book.author === 'string' ){
        bookAnswer[1].innerHTML = book.author
    }
    if(typeof book.years === 'string' ){
        bookAnswer[2].innerHTML = book.years
    }

    // while book porpery is not a number (porperty equals string) 
    while(!isNaN(book.title)){
        let y = prompt('Enter Letters For Title Fild')
        if(isNaN(y)){
            bookAnswer[0].innerHTML = y
            break
        }
    }

    while(!isNaN(book.author)){
        let y = prompt('Enter Letters For Aouthor Fild')
        if(isNaN(y)){
            bookAnswer[1].innerHTML = y
            break
        }
    }

    while(isNaN(book.years) || book.years === ''){
        let x =  prompt('Enter Number For Years Fild')
        if(!isNaN(x) && x !==''){
            bookAnswer[2].innerHTML = x 
            break
        }
    }
    console.log(typeof book.years)
}

// circle function start

// one way
// function cicleCalculator (){
//    let Circle = {
//     input: prompt('Enter radius'),
//     radius: function () {
//             if(currentRadius.innerHTML === 'NaN'){
//                 while(currentRadius.innerHTML === 'NaN'){
//                     let test = prompt('ENTER NUMBERS!!!')
//                     if(!isNaN(test) && test !== ''){
//                         currentRadius.innerHTML = NUm(test) / 2;
//                         break
//                     }
//                 }
//             }else{
//                 currentRadius.innerHTML = Circle.input / 2;
//             }
//         }
//     }
//     calcArea.addEventListener('click',Circle.radius())
//         // console.log(currentRadius.innerHTML === 'NaN')

// }

//  my way :)))

// circle object
function cicleCalculator (){
   let Circle = {
    input: prompt('Enter radius'),
    }

    calcArea.addEventListener('click',function(){
        if(currentRadius.innerHTML == 'NaN'){
            currentRadius.innerHTML = Circle.input / 2;
        }else{
            currentRadius.innerHTML = Circle.input / 2;
            hideText.style.display = 'none';
        }
    })
}

// studnets grader object
function studentsGrader (){
    let Student = {
        firstName : prompt('Enter Name with words'),
        lastName : prompt('Enter Lastname with words'),
        grade1: [],
        grade2: [],
    }

    
    function nameDefiner (name, name2, word, prop, prop2){

        if(!isNaN(name)){
            console.log(isNaN(name))
            prop.innerHTML = `First Name: Write Words!!`
        }else{
            prop.innerHTML = `First Name: ${name}`
        }

        if(!isNaN(name2)){
            console.log(isNaN(name2))
            prop2.innerHTML = `Last Name: Write Words!!`
        }else{
            prop2.innerHTML = `Last Name: ${name2}`
        }
        // function for arr
        function gradeArrAdder (arr, sNm){
            while(arr.length != 3){
                let grade = prompt(`Enter only number for grade of student ${sNm}`);
                if(isNaN(grade)){
    
                    let counter = 0;
                    while(isNaN(grade) && (arr.length != 3 )){
                        let test = prompt('only Number')
    
                        if(!isNaN(test) && test != '' && arr.length != 3){
                            arr.push(Number(test));
                            counter ++;
                            console.log(arr);
    
                            if(counter == 3){
                                break;
                            }
                        }
                    }
                    gradeArr[sNm-1].innerHTML =  `grade of student ${sNm}: ${arr.reduce((x,y) => x+y, 0)}`
                }else{
                    arr.push(Number(grade));
                    gradeArr[sNm-1].innerHTML =  `grade of student ${sNm}: ${arr.reduce((x,y) => x+y, 0)}`
                }
    
                console.log(typeof arr[0]);
            }
            gradeArrAdder(Student.grade2,2)
        }
        // functuin end
        gradeArrAdder(Student.grade1, 1)
    }
    nameDefiner(Student.firstName, Student.lastName, 'First', firstName, lastName)

}
