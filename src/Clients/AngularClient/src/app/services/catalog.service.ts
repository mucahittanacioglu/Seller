import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedItemsViewModel } from '../models/paginated-items-view-model';
import { CatalogItem } from '../models/CatalogModels/CatalogItem';
@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  apiUrl = "http://localhost:5000/catalog/items"
  constructor(private httpClient: HttpClient) { }

  getCatalogItems():Observable<PaginatedItemsViewModel<CatalogItem>> {
    return this.httpClient.get<PaginatedItemsViewModel<CatalogItem>>(this.apiUrl);
  }
}
