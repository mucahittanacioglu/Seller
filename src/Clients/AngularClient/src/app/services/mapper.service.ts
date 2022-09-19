import { Injectable } from '@angular/core';
import { Basket } from '../models/BasketModels/Basket';
import { BasketItem } from '../models/BasketModels/BasketItem';
import { BasketResponseModel } from '../models/BasketModels/BasketResponseModel';
import { CatalogItem } from '../models/CatalogModels/CatalogItem';

@Injectable({
  providedIn: 'root'
})
export class MapperService {

  constructor() { }
  mapCatalogItemToBasketItem(catItem:CatalogItem):BasketItem{
    return new BasketItem (
     "1",
      catItem.id,
      catItem.description,
      catItem.price,
      1,
      catItem.pictureUri
    )
  }
  mapBasketView(data:BasketResponseModel){
    return new Basket (
      data.items,
      data.buyerId    
    )
  }
}
