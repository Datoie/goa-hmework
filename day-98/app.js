/* this goga is outside the scope we can't create any same name variable */
const goga = 0;
const myFunc = () => {
    /* this goga is insde the scope so inside the fucntion we can delaer any vairable
    we want (I mean name), we can create same variable alos but we need to incialization new functuin
    bუt we can't able to equal there values each other */
    const goga = 3;
    console.log(goga);
};
myFunc();
console.log(goga);
// exercise 2
const btn = document.getElementById('login');
let isGreen = false;

function toggleColor() {
    if (isGreen) {
        btn.style.backgroundColor = 'red';
    } else {
        btn.style.backgroundColor = 'green';
    }
    isGreen = !isGreen;
}

// Initial color change on mouseover
btn.addEventListener('mouseover', () => {
    toggleColor();
});

// Reset color on mouseout
btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = 'red';
});

// Use setInterval to toggle the color every 1000 milliseconds (1 second)
setInterval(toggleColor, 1000);

// exercise 3
const logOut = document.getElementsByClassName('log-out');
console.log(logOut)
logOut[0].addEventListener('click', () => logOut[0].innerHTML = "LOVE <3");

// exercise 4 
const headingArr = document.getElementsByTagName('h2');
for(let i = 0; i < headingArr.length; i++){
    headingArr[i].innerHTML = '!!!GOA!!!'
    headingArr[i].style.color = 'red'
};