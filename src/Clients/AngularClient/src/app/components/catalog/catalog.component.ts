import { Component, OnInit } from '@angular/core';
import { CatalogItem } from 'src/app/models/CatalogModels/CatalogItem';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  catalogItems: CatalogItem[] =[];
  constructor(private catalogService:CatalogService) { }
  
  ngOnInit(): void {
    this.getCatalogItems();
  }

  getCatalogItems() {
    this.catalogService.getCatalogItems().subscribe(response=>{
      this.catalogItems = response.data;
    });

  }

}
