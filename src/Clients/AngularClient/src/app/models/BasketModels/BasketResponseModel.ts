import { BasketItem } from "./BasketItem";

export interface BasketResponseModel{
    items: BasketItem[];
    buyerId: string;
}