import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('testosteron', 100),
    new Ingredient('apples', 200)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
