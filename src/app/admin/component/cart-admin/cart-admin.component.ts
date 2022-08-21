import { ProductsService } from './../../../products/services/products.service';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart-admin',
  templateUrl: './cart-admin.component.html',
  styleUrls: ['./cart-admin.component.css']
})
export class CartAdminComponent implements OnInit {
  carts:any;
  constructor(private adminService:AdminService,private builder:FormBuilder,private ProducS:ProductsService) { }
  Form!:FormGroup
  details:any;
  products:any;
  ngOnInit(): void {
    this.Form=this.builder.group(
      {
        start:[""],
        end:[""]
      }
    )
    this.getCarts();
  }
  getCarts(){
    this.adminService.getCart().subscribe(resp=>{
      this.carts=resp;
    })
  }
  applyFilter(){
    this.adminService.getCart(this.Form.value).subscribe(resp=>{
      this.carts=resp;
      console.log(resp);
    })
  }
  view(id:any){
    this.products=[];
    this.details=this.carts[id];
    for(let x in this.details.products){
      this.ProducS.getSingleProduct(this.details.products[x].productId).subscribe(resp=>
        {
          this.products.push({item:resp,quantity:this.details.products[x].quantity});
          console.log(resp);
        }
      )
    }
  }
  delete(id:any){
    this.adminService.deleteCart(id).subscribe(resp=>{
      console.log(resp);
    })
  }

}
