import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Basket } from '../models/BasketModels/Basket';
import { BasketDto } from '../models/BasketModels/BasketDto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  apiUrl = "http://localhost:5000/basket";
  constructor(private httpClient: HttpClient,private authService:AuthService) { }

  getBasket():Observable<Basket>{
    return this.httpClient.get<Basket>(this.apiUrl+"/"+this.authService.getUsername());
  }
  updateBasket(basket:Basket){
    return this.httpClient.post<Basket>(this.apiUrl+"/update",basket);
  }
  addItemToBasket(productId:number){
    //http aggregation with catalog service on api gateway
  }
  checkout(basketDto:BasketDto){
    return this.httpClient.post(this.apiUrl+"/checkout",basketDto);
  }
}
