import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemService } from '../../../services/item.service'
import { Item } from '../../../models/Item.model'
import { SideCartComponent } from '../cart/side-cart/side-cart.component';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  animations: [
    trigger('open', [

      state('void', style({ position: 'absolute', left: '100%'})),

      transition(':enter, :leave', [
        animate(250)
      ]),
    ])
  ]
})
export class ItemListComponent implements OnInit {
  @ViewChild(SideCartComponent) child: SideCartComponent

  item: Item;
  items: Item[] = [];

  price: number[] = [];
  title: string[] = [];
  id: number;
  image: string[] = [];

  changeCart: boolean;
  visibleCart: boolean = false;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    //create the items
    this.createItems()
    //get the items created
    this.items = this.itemService.getItems()
  }

  //initialise the date of the items
  initData(){
    this.title[0] = "Canapé pour intérieur foncé"
    this.title[1] = "Canapé en velour"
    this.title[2] = "Chaise"
    this.title[3] = "Console Extensible"
    this.title[4] = "Fauteil en kasmir"
    this.title[5] = "Fauteuil bleu"
    this.title[6] = "Fauteuil original"
    this.title[7] = "Lit King size"
    this.title[8] = "Fauteuil Rose"

    this.image[0] = "../../../../assets/CanapéPourIntérieurFoncé.jpg"
    this.image[1] = "../../../../assets/CanapéEnVelour.jpg"
    this.image[2] = "../../../../assets/Chaise.jpg"
    this.image[3] = "../../../../assets/ConsoleExtensible.jpg"
    this.image[4] = "../../../../assets/FauteuilEnKashmir.jpg"
    this.image[5] = "../../../../assets/FauteuilBleu.jpg"
    this.image[6] = "../../../../assets/FauteuilOriginal.jpg"
    this.image[7] = "../../../../assets/LitKingSize.jpg"
    this.image[8] = "../../../../assets/FauteuilRose.jpg"

    this.price[0] = 340
    this.price[1] = 410
    this.price[2] = 480
    this.price[3] = 399
    this.price[4] = 287
    this.price[5] = 450
    this.price[6] = 204
    this.price[7] = 318
    this.price[8] = 459
  }

  //create the items
  createItems(){
    this.initData()
    for(let i = 0; i <this.title.length; i++) {
      this.id = i

      this.item = new Item(this.title[i],this.price[i],this.id,this.image[i], 1)

      if(this.itemService.items.length <= 8){
        this.itemService.createItems(this.item) 
      }
    }
  }

  //add the item selected to the localstorage
  addStorage(id: number){
    this.itemService.saveItems(id)
    this.visibleCart = true
    this.child.getItemsCart()
  }

}
