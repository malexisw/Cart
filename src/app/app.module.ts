import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ItemListComponent } from './components/container/item-list/item-list.component';
import { PageCartComponent } from './components/container/cart/page-cart/page-cart.component';
import { ItemService } from './services/item.service';
import { FaIconLibrary,FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart, faBars, faPlus, faTimes, faChevronUp, faChevronDown, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { SideCartComponent } from './components/container/cart/side-cart/side-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ItemListComponent,
    PageCartComponent,
    SideCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faShoppingCart, faBars, faPlus, faTimes, faChevronUp, faChevronDown, faAngleDoubleLeft, faAngleDoubleRight)
  }
 }
