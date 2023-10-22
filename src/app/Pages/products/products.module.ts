import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../service/ProductsService';
import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';
import { SharedComponents } from '../../components/SharedComponents.module';
import { ProductsPage } from './products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponents,
    ProductsPageRoutingModule
  ],
  providers: [ProductsService],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}
