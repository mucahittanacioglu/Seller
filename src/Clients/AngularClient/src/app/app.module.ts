import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogItemComponent } from './components/catalog-item/catalog-item.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasketComponent } from './components/basket/basket.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path:'',component:LoginComponent},
  {path:'tobasket',component:BasketComponent},
  {path:'catalogs',component:CatalogComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CatalogItemComponent,
    LoginComponent,
    BasketComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
