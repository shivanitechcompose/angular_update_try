import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import {
  computed,
  effect,
  signal,
} from '@angular/core';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() {
    const productItems = signal([{ name: 'Product H', price: 1 }])
    effect(() => {
      console.log('productItems:', `${productItems()[1]['name']}`)
    })
    productItems.mutate((ele: any) => {
      ele.push( { name: 'Product S', price: 0 })
    })
   }

  items = [{ name: 'Product A', price: 10 }, { name: 'Product B', price: 15 }, { name: 'Product C', price: 20 }];
  
  itemList = signal(this.items);
  
  totalPrice = computed(() => {
    return this.itemList().map((ele) => ele?.price - 5);
  });

  ngOnInit(): void {
    console.log('hey from product')
    const x = signal(5);
    const y = signal(3);
    const z = computed(() => x() + y());
    console.log(z()); // 8

    x.set(10);
    console.log(z()); // 13
  }
  
  public removeItem(item: any) {
    // this.itemList.set(this.itemList().filter((ele) => ele?.price === 10))
    // Update the itemList signal by removing the selected item
    this.itemList.set(this.itemList().filter((i) => i !== item));
  }


}
