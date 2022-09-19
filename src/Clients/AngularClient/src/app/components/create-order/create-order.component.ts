import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/models/OrderModel/Order';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  orderForm:FormGroup;
  order:Order= {
    CardExpirationShort: "04/23",
    CardHolderName: "Mücahit",
    CardNumber: "1234123412341234",
    CardSecurityNumber: "123",
    CardTypeId: 1,
    City: "İstanbul",
    Description: "Test Desc",
    Street: "Test Street",
    Country: "Turkey",
    OrderNumber: '',
    Date: new Date(Date.now()),
    Status: '',
    State: '',
    ZipCode: '',
    CardExpiration:new Date(2023, 4, 4, 17, 23, 42, 11),
    Buyer: '',
    OrderItems: []
  }
  constructor(private formBuilder:FormBuilder) { 
    this.orderForm=this.createOrderForm();
  }

  ngOnInit(): void {
  }
  createOrderForm(){
    return this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }
  createOrder(){

  }
  
}
