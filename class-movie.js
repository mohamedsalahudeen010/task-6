class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        
    }
    
}
var instance= new movie("Casino Royale","Eon Productions","PG13");

console.log(instance.title);
console.log(instance.rating);
