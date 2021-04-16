import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './pages/header.component/header.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipeListComponent } from './pages/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './pages/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './pages/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShopingListComponent } from './pages/shoping-list/shoping-list.component';
import { ShopingEditComponent } from './pages/shoping-list/shoping-edit/shoping-edit.component';
import { ShopingItemComponent } from './pages/shoping-list/shoping-item/shoping-item.component';
import {FormsModule} from '@angular/forms';
import { DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from './pages/shoping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShopingListComponent,
    ShopingEditComponent,
    ShopingItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
