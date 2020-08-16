import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models/Item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [];
  itemsStore: Item[] = [];
  itemsSubject = new Subject<Item[]>();

  constructor() { }
  

  createItems(newItem: Item){
    this.items.push(newItem);
    this.emitItems()
  }

  emitItems() {
    this.itemsSubject.next(this.items);
  }

  //save dans local storage
  saveItems(id: number) { 
    let key = 'Items '+id;
    localStorage.setItem(key, JSON.stringify(this.items[id]))
  }

  getItems(){
    return this.items
  }

  //get tout les item du local storage
  getItemsSave() {
    if(localStorage.length >= 0){
      for(let i=0; i < localStorage.length; i++){
        var key = localStorage.key(i)
        var value = localStorage.getItem(key)
        this.itemsStore[i] = JSON.parse(value)
      }
    } else {
      console.log("Il n'y a aucun item dans votre Cart !")
    }
    return this.itemsStore
  }

  //delete un item du cart
  deleteItems(id: number) {
    let key = 'Items '+id;
    localStorage.removeItem(key)
  }

  //delete tous le localstorage
  deleteAllItems(){
    localStorage.clear();
  }
}
