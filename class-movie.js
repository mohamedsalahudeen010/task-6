class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        
    }
    getPG(){
        if(this.rating==undefined)
        return this.rating="PG"
    }
    
}
var movie1= new movie("Casino Royale","Eon Productions","PG13");

console.log(movie1.title);
console.log(movie1.studio);
console.log(movie1.rating);
