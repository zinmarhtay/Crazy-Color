import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClothesComponent } from './clothes/clothes.component';
import { NewClotheComponent } from './clothes/new-clothe/new-clothe.component';
import { CartComponent } from './clothes/cart/cart.component';
import { FavouriteClothesComponent } from './favourite-clothes/favourite-clothes.component';
import { DressService } from './services/dress.service';
import { HttpClientModule } from '@angular/common/http';
import { CartDetailComponent } from './clothes/cart/cart-detail/cart-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ClothesComponent,
    NewClotheComponent,
    CartComponent,

    FavouriteClothesComponent,

    CartDetailComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
