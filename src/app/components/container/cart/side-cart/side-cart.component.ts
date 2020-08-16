import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../../services/item.service'
import { Item } from '../../../../models/Item.model'

@Component({
  selector: 'app-side-cart',
  templateUrl: './side-cart.component.html',
  styleUrls: ['./side-cart.component.scss']
})
export class SideCartComponent implements OnInit {

  item: Item;
  items: Item[] = [];

  msg: String;
  ttPrice: number = 0;

  show:boolean = false;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItemsCart();
    this.getTotalPrice();
  }

  getItemsCart(){
    this.items = this.itemService.getItemsSave();
    this.show = true
  }

  getTotalPrice(){
    this.ttPrice = 0
    this.items.forEach(item => {
      this.ttPrice += item.price * item.count;
    });
  }

  clearCart(){
    this.itemService.deleteAllItems();
    this.items.length = 0
    this.getTotalPrice()
  }

  deleteItem(id: number){
    this.itemService.deleteItems(id)
    this.items.length = 0
    this.getItemsCart()
    this.getTotalPrice()
  }

  addCount(id: number){
    this.items[id].count += 1
    this.getTotalPrice()
  }

  dropCount(id: number){
    if(this.items[id].count >= 1){
      this.items[id].count -= 1
      this.deleteItem(id)
    } else {
      this.items[id].count -= 1
    }
    this.getTotalPrice()
  }

}
