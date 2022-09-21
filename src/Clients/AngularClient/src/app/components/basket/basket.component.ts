import { Component, Input, OnInit } from '@angular/core';
import { Basket } from 'src/app/models/BasketModels/Basket';
import { BasketDto } from 'src/app/models/BasketModels/BasketDto';
import { BasketService } from 'src/app/services/basket.service';
import { MapperService } from 'src/app/services/mapper.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
 
  basket:Basket = {
    items: [],
    buyerId: "",
    total:0
    }
  constructor(private basketService:BasketService,private mapperService:MapperService) { }
  
  isCheckout=false;

  ngOnInit(): void {
    this.basketService.getBasket().subscribe(response=>{
      this.basket = this.mapperService.mapBasketView(response);
    },responseError => {
      console.log(responseError);
    });  }
  
    /*
  checkout(basketDto:BasketDto){
    console.log("test");
      this.basketService.checkout(basketDto).subscribe(response=>{
        console.log("Checkout success!")
      },responseError=>{
        console.log(responseError)
      });
  }
  getMockCheckout():BasketDto{
    var username =""
    username += localStorage.getItem("username") ;
    username = username ? username:"test";
    return new BasketDto(
      "Istanbul",
      "Kadim sokak",
      "Istanbul",
      "Turkey",
      "33840",
      "213231321321321231",
      "Mucahit Tanacioglu",
      new Date(2023, 4, 4, 17, 23, 42, 11),
      "311",
      0,
      username,
    )
  }
  */

}
