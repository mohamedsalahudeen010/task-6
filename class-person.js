class person{
    constructor(name,profession,age,gender,height,weight){
        this.name=name;
        this.profession=profession;
        this.age=age;
        this.gender=gender;
        this.height=height;
        this.weight=weight;
        
    }
    
}
var details= new person("sachin","cricketer",48,"male", "5.5 feets",68);

console.log(details.name);
console.log(details.profession);
console.log(details.age);
console.log(details.gender);
console.log(details.height);
console.log(details.weight);
console.log(details);
