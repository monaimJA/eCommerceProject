import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  idSelected:any;
  product:any;
  loading:boolean=false;
  constructor(private routerAct:ActivatedRoute,private productS:ProductsService) { }

  ngOnInit(): void
  {
    this.idSelected=this.routerAct.snapshot.params['id'];
    this.getProduct(this.idSelected);
  }
  getProduct(id:any){
    this.loading=true;
    this.productS.getSingleProduct(id).subscribe(resp=>{
      this.loading=false;
      this.product=resp;
    },
    error=>{
      this.loading=true;
    })
  }

}
