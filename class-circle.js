class circle{
    constructor(radius,colour){
        this.radius=radius;
        this.colour=colour;
        
    }
     getarea (){
        return (Math.PI*this.radius*this.radius).toFixed(2);
    }
    getcircumference(){
        return (2*Math.PI*this.radius).toFixed(2);
    }
}
var circle1= new circle(1.0,"red");



console.log(circle1.colour);
console.log(circle1.radius);
console.log(circle1.getarea());
console.log(circle1.getcircumference());