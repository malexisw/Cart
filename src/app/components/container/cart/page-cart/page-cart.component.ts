import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../../services/item.service'
import { Item } from '../../../../models/Item.model'

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.scss']
})
export class PageCartComponent implements OnInit {

  item: Item;
  items: Item[] = [];

  msg: String;
  ttPrice: number = 0;

  show:boolean = false;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    //get the item
    this.getItemsCart();
    //get the total price of the item
    this.getTotalPrice();
  }

  //get the item from the localstorage
  getItemsCart(){
    if(localStorage.length > 0){
      this.items = this.itemService.getItemsSave();
      this.show = true
    } else {
      this.msg = "Vous n'avez aucune fourniture dans votre panier !"
    }
  }

  //calcul the price total of the item in the cart
  getTotalPrice(){
    this.ttPrice = 0
    this.items.forEach(item => {
      this.ttPrice += item.price * item.count;
    });
  }

  //Erase every item in the cart
  clearCart(){
    this.itemService.deleteAllItems();
    this.items.length = 0
    this.getTotalPrice()
  }

  //Delete the item selected from the cart
  deleteItem(id: number){
    this.itemService.deleteItems(id)
    this.items.length = 0
    this.getItemsCart()
    this.getTotalPrice()
  }

  //add one item to the cart and re-calcul the total price
  addCount(id: number){
    this.items[id].count += 1
    this.getTotalPrice()
    }

  //remove one item to the cart and re-calcul the total price. If the item count drop to 0 remove the item from the cart
  dropCount(id: number, i: number){
    console.log(id)
    if(this.items[i].count <= 1){
      this.items[i].count -= 1
      this.deleteItem(id)
    } else {
      this.items[i].count -= 1
    }
    this.getTotalPrice()
  }

}
