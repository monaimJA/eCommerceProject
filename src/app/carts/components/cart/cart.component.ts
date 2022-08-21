import { CartsService } from './../../services/carts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts:any[]=[];
  Total=0;
  successOrErrorMessage:string|null=null;
  constructor(private cartSer:CartsService) { }

  ngOnInit(): void {
    this.LoadCart();
  }
  LoadCart(){
    if("cart" in localStorage){
      this.cartProducts=JSON.parse(localStorage.getItem('cart')!);
    }
    this.getTotal();
  }
    getTotal(){
      this.Total=0;
      for(let i in this.cartProducts){
        this.Total=this.Total+this.cartProducts[i].item.price*this.cartProducts[i].quantity;
      }
    }
    detectChange(){
      localStorage.setItem("cart",JSON.stringify(this.cartProducts));
      this.getTotal();
    }
    deleteProduct(index:any){
      this.cartProducts.splice(index,1);
      localStorage.setItem("cart",JSON.stringify(this.cartProducts));
      this.getTotal();
    }
    clear(){
      this.cartProducts=[];
      localStorage.setItem("cart",JSON.stringify(this.cartProducts));
      this.getTotal();
    }
    addCart(){
      let products=this.cartProducts.map(item=>{
        return {productId:item.item.id,quantity:item.quantity}
      })
      let Model={
        userId:5,
        date:new Date(),
        products:products
      }
      this.cartSer.addCartItem(Model).subscribe(
        resp=>{
          this.successOrErrorMessage="Your order is ready and your items was added succefully";
        },
        error=>{
          this.successOrErrorMessage="there is a error : "+error;
        }
      )
    }


}
