export class BasketDto{
    city:string;  
    street:string; 
    state :string;
    country :string;  
    zipCode :string; 
    cardNumber :string; 
    cardHolderName :string;  
    cardExpiration:Date;
    cardSecurityNumber:string;  
    cardTypeId:number;  
    buyer:string;  
   
    constructor(City:string,  
        Street:string, 
        State :string,
        Country :string, 
        ZipCode :string,
        CardNumber :string,
        CardHolderName :string,
        CardExpiration:Date,
        CardSecurityNumber:string,
        CardTypeId:number,
        Buyer:string){

            this.city = City;
            this.street = Street;
            this.state = State;
            this.country = Country;
            this.zipCode = ZipCode;
            this.cardNumber = CardNumber;
            this.cardHolderName = CardHolderName;
            this.cardExpiration = CardExpiration;
            this.cardSecurityNumber = CardSecurityNumber;
            this.cardTypeId = CardTypeId;
            this.buyer = Buyer;


    }
}