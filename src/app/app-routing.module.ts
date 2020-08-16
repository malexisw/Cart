import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemListComponent } from './components/container/item-list/item-list.component';
import { PageCartComponent } from './components/container/cart/page-cart/page-cart.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ItemListComponent},
  {path: 'cart', component: PageCartComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
