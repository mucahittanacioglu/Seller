import { BasketItem } from "./BasketItem";
import { BasketResponseModel } from "./BasketResponseModel";
export class Basket implements BasketResponseModel{
    items: BasketItem[];
    buyerId: string;
      
    total:number ;
    constructor(items:BasketItem[],buyerId:string){
      this.items=items;
      this.buyerId = buyerId;
      this.total = this.items.reduce((accumulator, item) => {
        return accumulator + item.unitPrice;
      }, 0);;
    }
}