import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedComponents } from '../../components/SharedComponents.module';
import { IonicModule } from '@ionic/angular';

import { SingleProductPageRoutingModule } from './single-product-routing.module';

import { SingleProductPage } from './single-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedComponents,
    IonicModule,
    SingleProductPageRoutingModule
  ],
  declarations: [SingleProductPage]
})
export class SingleProductPageModule {}
