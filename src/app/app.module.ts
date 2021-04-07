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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShopingListComponent,
    ShopingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
