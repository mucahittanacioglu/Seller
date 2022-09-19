import { Component, OnInit,Input } from '@angular/core';
import { CatalogItem } from 'src/app/models/CatalogModels/CatalogItem';
import { BasketService } from 'src/app/services/basket.service';
import { MapperService } from 'src/app/services/mapper.service';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {
  @Input() catalogItem: CatalogItem={
    id:0,
    name:"test",
    description:"test desc",
    price:10,
    pictureFileName:"test file name",
    pictureUri:"test uri",
    catalogType:{
      id:1,
      type:"test type"
    },
    catalogBrand:{
      id:1,
      brand:"test brand"
    },
    catalogTypeId:1,
    catalogBrandId:1,
    availableStock:1,
    onReorder:false
  };

  constructor(private basketService:BasketService,private mapperService:MapperService) { }

  ngOnInit(): void {
  }
  
  addToCart(ci:CatalogItem){
    var bi = this.mapperService.mapCatalogItemToBasketItem(ci);
    this.basketService.addItemToBasket(bi).subscribe(response=>{console.log("Item added")},responseError=>{
      console.log(responseError)
    });
  }
}
