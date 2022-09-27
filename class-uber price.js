class tariff{
    
    constructor(price,distance){
          this.price=price;
          this.distance=distance;
          
      }
       getfare (){
          return (this.price*this.distance).toFixed(2);
      }
      
  }
  var uber= new tariff(19,20);
  
  console.log(uber.getfare());