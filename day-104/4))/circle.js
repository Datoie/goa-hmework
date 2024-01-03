/*#4 Create a new JavaScript file named circle.js Create a class named Circle The class 
should have two properties: Pi: This should be a static property with
a value of 3.14159. (You can use the built-in Math.PI for a more accurate
value if desired.) radius: This should be a dynamic property initialized
through the constructor. The constructor of the Circle class should accept
one parameter, radius. Ensure that the radius is positive. If a negative
radius or zero is provided, throw an error with a relevant message. area():
This method should return the area of the circle. Formula: Pi * radius^2.
perimeter(): This method should return the perimeter (circumference)
of the circle. Formula: 2 * Pi * radius.*/

class Circle {
    static Pi = Math.PI;
    
    constructor(radius){
        if(radius <= 0){
            throw new Error ('Try Again number is must be positive')
        }else{
            this.radius = radius;
        }
    }
    formula1(){
        return Circle.Pi * (this.radius ** 2)
    }
    formula2(){
        return 2 * Circle.Pi * this.radius 
    }

}
const circleClass = new Circle(-1)

console.log(circleClass.formula1())
console.log(circleClass.formula2())
