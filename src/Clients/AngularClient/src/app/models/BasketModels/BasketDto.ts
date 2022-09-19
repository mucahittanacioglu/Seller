export class BasketDto{
    City:string;  
    Street:string; 
    State :string;
    Country :string;  
    ZipCode :string; 
    CardNumber :string; 
    CardHolderName :string;  
    CardExpiration:Date;
    CardSecurityNumber:string;  
    CardTypeId:number;  
    Buyer:string;  
   
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

            this.City = City;
            this.Street = Street;
            this.State = State;
            this.Country = Country;
            this.ZipCode = ZipCode;
            this.CardNumber = CardNumber;
            this.CardHolderName = CardHolderName;
            this.CardExpiration = CardExpiration;
            this.CardSecurityNumber = CardSecurityNumber;
            this.CardTypeId = CardTypeId;
            this.Buyer = Buyer;


    }
}