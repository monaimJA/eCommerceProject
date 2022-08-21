import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  api=environment.host;
  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get(this.api+"/products");
  }
  getAllCategories(){
    return this.http.get(environment.host+"/products/categories");
  }
  filterProducts(data:any){
    return this.http.get(environment.host+"/products/category/"+data);
  }
  getSingleProduct(id:any){
    return this.http.get(environment.host+"/products/"+id);
  }
  addProduct(model:any){
    return this.http.post(environment.host+"/products",model);
  }

}
