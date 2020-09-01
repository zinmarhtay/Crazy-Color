import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClothesComponent } from './clothes/clothes.component';
import { FavouriteClothesComponent } from './favourite-clothes/favourite-clothes.component';
import { NewClotheComponent } from './clothes/new-clothe/new-clothe.component';
import { CartDetailComponent } from './clothes/cart/cart-detail/cart-detail.component';
import { CartComponent } from './clothes/cart/cart.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'clothes',component:ClothesComponent},
  {path:'favourite', component:FavouriteClothesComponent},
  {path:'add', component:NewClotheComponent},
  {path:'clothes/:id',component:CartDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
