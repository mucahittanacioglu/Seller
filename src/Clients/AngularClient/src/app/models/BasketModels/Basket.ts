import { BasketItem } from "./BasketItem";

export class Basket{
    Items: BasketItem[] = [];
    BuyerId!: string;
    total:number = this.Items.reduce((accumulator, item) => {
        return accumulator + item.UnitPrice;
      }, 0);
}