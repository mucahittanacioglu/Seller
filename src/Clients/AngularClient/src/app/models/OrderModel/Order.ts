import { OrderItem } from "./OrderItem";

export interface Order{
    OrderNumber:string;
    Date:Date;
    Status:string;
    Description:string;
    City:string;
    Street:string;
    State:string;
    Country:string;
    ZipCode:string;
    CardNumber:string;
    CardHolderName:string;
    CardExpirationShort:string;
    CardExpiration:Date;
    CardSecurityNumber:string;
    CardTypeId:number;
    Buyer:string;
    OrderItems:OrderItem[];
}