import { Component, OnInit,Input } from '@angular/core';
import { CatalogItem } from 'src/app/models/CatalogModels/CatalogItem';

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

  constructor() { }

  ngOnInit(): void {
  }

}
