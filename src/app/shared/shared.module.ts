import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { BookCardsComponent } from './component/book-cards/book-cards.component';
import { AngularMaterialModule } from '../material.module';

import { HeaderComponent } from './component/header/header.component';

import { ShowSimilarItemsComponent } from './component/show-similar-items/show-similar-items.component';

import { AddtocartComponent } from './component/addtocart/addtocart.component';
import { AddtowishlistComponent } from './component/addtowishlist/addtowishlist.component';

@NgModule({
  declarations: [
    SharedComponent,
    BookCardsComponent,
    AddtocartComponent,
    AddtowishlistComponent,
    HeaderComponent,
    
    ShowSimilarItemsComponent,
         AddtocartComponent,
         AddtowishlistComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, AngularMaterialModule],
  exports: [
    BookCardsComponent,
    AddtocartComponent,
    AddtowishlistComponent,
    HeaderComponent,
    ShowSimilarItemsComponent
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
