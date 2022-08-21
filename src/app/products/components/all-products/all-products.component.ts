import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products:any;
  errorMessage=null;
  categories:any;
  Loading:boolean=false;
  cartProducts:any[]=[];
  constructor(private productsSer:ProductsService) { }
  ngOnInit(): void {
    this.allProducts();
    this.allCategories();
  }
  allProducts(){
    this.Loading=true;
    this.productsSer.getAllProducts().subscribe(resp=>{
      this.products=resp;
      this.Loading=false;
    }
    ,
    error=>{
      this.errorMessage=error.message;
    }
    )
  }
  allCategories(){
    this.Loading=true;
    this.productsSer.getAllCategories().subscribe(resp=>{
      this.categories=resp;
      this.Loading=false;
    }
    ,
    error=>{
      this.errorMessage=error.message;
    })
  }
  filterProducts($event:any){
    this.Loading=true;
    if($event.target.value=="All"){
      this.Loading=false;
      this.allProducts();
    }else{
      this.Loading=false;
      this.productsSer.filterProducts($event.target.value).subscribe(resp=>{
        this.products=resp;
      },
      error=>{
        this.errorMessage=error.message;
      })
    }

  }
  addToCart(event:any){
    if("cart" in localStorage){
      this.cartProducts=JSON.parse(localStorage.getItem('cart')!);
      let exist=this.cartProducts.find(item=>item.item.id==event.item.id);
      if(exist){
        alert("the product is already in your cart");
      }else{
        this.cartProducts.push(event);
        localStorage.setItem("cart",JSON.stringify(this.cartProducts));
      }
    }else{
      this.cartProducts.push(event);
      localStorage.setItem("cart",JSON.stringify(this.cartProducts));
    }
  }

}
