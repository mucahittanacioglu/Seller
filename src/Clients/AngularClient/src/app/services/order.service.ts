import { Injectable } from '@angular/core';
import { BasketDto } from '../models/BasketModels/BasketDto';
import { Order } from '../models/OrderModel/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  mapOrderToBasketDto(order:Order):BasketDto{
    return  new BasketDto
            (
                order.City,
                order.Street,
                order.State,
                order.Country,
                order.ZipCode,
                order.CardNumber,
                order.CardHolderName,
                order.CardExpiration,
                order.CardSecurityNumber,
                1,
                order.Buyer
            );
  }
}
