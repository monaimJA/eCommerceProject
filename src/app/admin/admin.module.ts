import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartAdminComponent } from './component/cart-admin/cart-admin.component';
import { ProductsAdminComponent } from './component/products-admin/products-admin.component';



@NgModule({
  declarations: [

    CartAdminComponent,
     ProductsAdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],exports:[
CartAdminComponent
  ]
})
export class AdminModule { }
