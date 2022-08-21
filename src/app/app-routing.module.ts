import { ProductsAdminComponent } from './admin/component/products-admin/products-admin.component';
import { CartAdminComponent } from './admin/component/cart-admin/cart-admin.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';

const routes: Routes = [
  {
    path:"products",component:AllProductsComponent,
  }
  ,
  {
    path:"details/:id",component:ProductsDetailsComponent
  },
  {
    path:"cart",component:CartComponent
  }
  ,
  {
    path:"admin/cart",component:CartAdminComponent
  },
  {
    path:"admin/products",component:ProductsAdminComponent
  },
  {
    path:"**",redirectTo:"products",pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
