import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BasketDto } from 'src/app/models/BasketModels/BasketDto';
import { Order } from 'src/app/models/OrderModel/Order';
import { BasketService } from 'src/app/services/basket.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  
  
  
  

  order:Order= {
    CardExpirationShort: "04/23",
    CardHolderName: "Mücahit Tanacioglu",
    CardNumber: "0000-0000-0000-0000",
    CardSecurityNumber: "123",
    CardTypeId: 1,
    City: "İstanbul",
    Street: "Kadir sokak",
    Country: "Turkey",
    State: 'Istanbul',
    ZipCode: '33840',
    CardExpiration: new Date(2023, 4, 4, 17, 23, 42, 11),
    Buyer: "",
  }
  constructor(private orderService:OrderService, private basketService:BasketService) { 
   
  }

  ngOnInit(): void {
  }
 
  createOrder(){
  
  var username="";
  username +=  localStorage.getItem("username");
  this.order.Buyer = username;

  var basketDto = this.orderService.mapOrderToBasketDto(this.order);

  this.basketService.checkout(basketDto).subscribe(response=>{
    console.log("Checkout success!");
    
  },responseError=>{
    console.log(responseError)
  });
  }
  
}
